require('express-async-errors'); 
const bcrypt = require('bcryptjs'); 
const jwt    = require('jsonwebtoken'); 

const { Customer, Officer, Guest } = require('../models/Account');
const { generateOTP, verifyOTP,  resendOTP, ok, error } = require('../utils/helpers'); 
const { db } = require('../utils/firebase');

// (Customer + Officer) انشاء حساب
const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, phone, role } = req.body;

    if (!firstName || !lastName || !email || !password || !phone || !role)
      return error(res, 'جميع الحقول مطلوبة', 400);

    if (!['CUSTOMER', 'OFFICER'].includes(role))
      return error(res, 'الدور غير صحيح', 400);
// mark---------------------------------
const emailCheck = await db.collection('users').where('email', '==', email).get();
if (!emailCheck.empty) {
  return error(res, 'هذا المستخدم مسجل بالفعل', 400);
}
//  التأكد من أن رقم الجوال غير مسجل مسبقاً
const phoneCheck = await db.collection('users').where('phone', '==', phone).get();
if (!phoneCheck.empty) {
  return error(res, 'رقم الجوال هذا مستخدم في حساب آخر', 400);
}

// mark---------------------------------

    const hashed = await bcrypt.hash(password, 10);

    const user = role === 'CUSTOMER'
      ? new Customer({ firstName, lastName, email, password: hashed, phone })
      : new Officer({ firstName, lastName, email, password: hashed, phone });

     await db.collection('users').add({
      firstName,
      lastName,
      email,
      password: hashed,
      phone,
      role,
      officeId: role === 'OFFICER' ? (req.body.officeId || null) : null, 
      isVerified: false,
      createdAt: new Date()
    });
    const code = generateOTP(phone);

    return ok(res, {
      message: 'تم إنشاء الحساب — أدخل كود التحقق',
      otp: code
    }, 201);

  } catch (err) {
    return error(res, err.message, 500);
  }
};

// ── Verify OTP بعد التسجيل ─────────────────────────────
const verifyAccount = async (req, res) => {
  try {
    const { phone, code } = req.body;

    if (!phone || !code) return error(res, 'رقم الجوال والرمز مطلوبان', 400);

    verifyOTP(phone, code);

    const userSnapshot = await db
  .collection('users')
  .where('phone', '==', phone)
  .limit(1)
  .get();

if (userSnapshot.empty) {
  return error(res, 'المستخدم غير موجود', 404);
}

await userSnapshot.docs[0].ref.update({
  isVerified: true
});

    return ok(res, { message: 'تم التحقق بنجاح ✅' });

  } catch (err) {
    return error(res, err.message, 400);
  }
};

// ── Resend OTP ─────────────────────────────────────────
const resendCode = async (req, res) => {
  try {
    const { phone } = req.body;

    if (!phone) return error(res, 'رقم الجوال مطلوب', 400);

    const code = resendOTP(phone);

    return ok(res, { message: 'تم إرسال كود جديد', otp: code });

  } catch (err) {
    return error(res, err.message, 400);
  }
};

// ── Login (Customer + Officer + Admin) ────────────────
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return error(res, 'الإيميل وكلمة السر مطلوبان', 400);
    const userSnapshot = await db.collection('users').where('email', '==', email).limit(1).get();

    if (userSnapshot.empty){
      return error(res, 'الإيميل أو كلمة السر غير صحيحة', 401);
    }

    const userDoc = userSnapshot.docs[0];
    const userData = userDoc.data();
    const userId = userDoc.id;

    const isMatch = await bcrypt.compare(password, userData.password);
    if (!isMatch)
      return error(res, 'الإيميل أو كلمة السر غير صحيحة', 401);

    //
    let actualOfficeName = "مكتب المفقودات الرئيسي"; 

if (userData.role === 'OFFICER' && userData.officeId) {
  try {
    
    const officeDoc = await db.collection('offices').doc(userData.officeId).get();
    if (officeDoc.exists) {
     actualOfficeName = officeDoc.data().officeName;
    }
  } catch (officeErr) {
    console.error("Error fetching office name:", officeErr);
  }
}

  const token = jwt.sign(
      { 
        id: userId, 
        role: userData.role, 
        officeId: userData.officeId || null 
      }, 
      process.env.JWT_SECRET,
      { expiresIn: '2h' } 
    );

  return ok(res, { 
  token, 
  role: userData.role,
  officeName: actualOfficeName ,
   id: userId
});

  } catch (err) {
    return error(res, err.message, 500);
  }
};

// ── Logout ─────────────────────────────────────────────
const logout = async (req, res) => {
  try {
    return ok(res, { message: 'تم تسجيل الخروج ✅' });
  } catch (err) {
    return error(res, err.message, 500);
  }
};

// ── Forgot Password ────────────────────────────────────
const forgotPassword = async (req, res) => {
  try {
     const { email } = req.body;
   if (!email) return error(res, 'البريد الإلكتروني مطلوب', 400);

    const userSnapshot = await db
      .collection('users')
      .where('email', '==', email)
      .limit(1)
      .get();

    if (userSnapshot.empty) {
      return error(res, 'البريد الإلكتروني غير موجود', 404);
    }

    const userDoc = userSnapshot.docs[0];
    const userData = userDoc.data();
    const code = generateOTP(userData.phone);

    return ok(res, {
      message: 'تم إرسال رمز التحقق',
      otp: code,
      phone: userData.phone
    });

  } catch (err) {
    return error(res, err.message, 500);
  }
};

// ── Reset Password ─────────────────────────────────────
const resetPassword = async (req, res) => {
  try {
    const { phone, newPassword } = req.body;
      if (!phone || !newPassword)
      return error(res, 'جميع الحقول مطلوبة', 400);

    const hashed = await bcrypt.hash(newPassword, 10);
     const userSnapshot = await db
  .collection('users')
  .where('phone', '==', phone)
  .limit(1)
  .get();

if (userSnapshot.empty) {
  return error(res, 'المستخدم غير موجود', 404);
}

await userSnapshot.docs[0].ref.update({
  password: hashed
});
    return ok(res, { message: 'تم تغيير كلمة السر ✅ — سجل دخول' });

  } catch (err) {
    return error(res, err.message, 400);
  }
};


// ── Guest Access ───────────────────────────────────────
const guestAccess = async (req, res) => {
  try {
    const { phone } = req.body;

    if (!phone) return error(res, 'رقم الجوال مطلوب', 400);

    const guest = new Guest({ phone });
    const code  = generateOTP(phone);

    return ok(res, { message: 'أدخل كود التحقق', otp: code, guestID: guest.guestID }, 201);

  } catch (err) {
    return error(res, err.message, 500);
  }
};

// ── Verify Guest ───────────────────────────────────────
const verifyGuest = async (req, res) => {
  try {
    const { phone, code } = req.body;

   if (!phone || !code) {
      return error(res, 'رقم الجوال والرمز مطلوبان', 400);
    }

    verifyOTP(phone, code);

const guestRef = await db.collection('guests').add({
      phone,
      role: 'GUEST',
      isGuest: true,
      createdAt: new Date()
    });

    const token = jwt.sign(
      {
        id: guestRef.id,
        role: 'GUEST',
        isGuest: true
      },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    return ok(res, {
      message: 'تم التحقق — يمكنك رفع تقرير ✅',
      token,
      role: 'GUEST',
      guestId: guestRef.id
    });
  } catch (err) {
    return error(res, err.message, 400);
  }
};

const getProfile = async (req, res) => { 
  try {
    const userDoc = await db.collection('users').doc(req.user.id).get();

    if (!userDoc.exists) {
      return error(res, 'المستخدم غير موجود', 404);
    }

    const userData = userDoc.data();

    return ok(res, {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      phone: userData.phone,
     
    });

  } catch (err) {
    return error(res, err.message, 500);
  }
};

const updateProfile = async (req, res) => {
  try {
    const { firstName, lastName, email ,fcmToken} = req.body;

    if (!firstName || !lastName || !email) {
      return error(res, 'جميع الحقول مطلوبة', 400);
    }
    
    const updateData = {
      firstName,
      lastName,
      email
    };
    if (fcmToken) {
      updateData.fcmToken = fcmToken;
    }

    await db.collection('users').doc(req.user.id).update(updateData);
  return ok(res, { message: 'تم تحديث الملف الشخصي ✅' });

  } catch (err) {
    return error(res, err.message, 500);
  }
};

const deleteAccount = async (req, res) => {
  try {
    await db.collection('users').doc(req.user.id).delete();

    return ok(res, { message: 'تم حذف الحساب ✅' });

  } catch (err) {
    return error(res, err.message, 500);
  }
};
module.exports = { register, verifyAccount, resendCode, login, logout, forgotPassword, resetPassword, guestAccess, verifyGuest, getProfile, updateProfile, deleteAccount };