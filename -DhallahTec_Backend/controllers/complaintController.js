const admin = require('firebase-admin');
const db = admin.firestore();
const { v4 :  ID } = require ("uuid");
const { ok, error } = require('../utils/helpers');

const submitComplaint = async (req, res) => {
  try {
    const { title, details } = req.body;
    const userID = req.user.id; 
    const role   = req.user.role;

    if (!title || !details)
      return error(res, 'العنوان والتفاصيل مطلوبان', 400);

    if (!['CUSTOMER', 'OFFICER'].includes(role))
      return error(res, 'غير مصرح', 403);

   
    const userDoc = await db.collection('users').doc(userID).get();
    if (!userDoc.exists) {
        return error(res, 'المستخدم غير موجود في قاعدة البيانات', 404);
    }
    const userData = userDoc.data();

   
    const fullName = userData.name || `${userData.firstName || ''} ${userData.lastName || ''}`.trim() || "مستخدم غير معروف";

    const complaint = {
      complaintID: ID(),
      userID,
      userName: fullName, 
      role,
      title,
      details,
      status: 'قيد الانتظار',
createdAt: admin.firestore.FieldValue.serverTimestamp(),
      adminResponse: null,
    };

  
    await db.collection('complaints').doc(complaint.complaintID).set(complaint);
   
    const adminNotification = {
      id: ID(),
      title: " بلاغ شكوى جديد",
      body: `قام المستخدم (${fullName}) برفع شكوى جديدة بعنوان: ${title}`,
      createdAt: new Date().toISOString(), 
      isRead: false,
      role: "ADMIN",
      complaintId: complaint.complaintID,
      userID: userID
    };

   
    await db.collection('notifications').doc(adminNotification.id).set(adminNotification);

    return ok(res, { message: 'تم إرسال الشكوى ✅', complaint }, 201);

  } catch (err) {
    console.error("Error in submitComplaint:", err); 
    return error(res, 'حدث خطأ غير متوقع أثناء إرسال الشكوى', 500);
  }
};
const getMyComplaints = async (req, res) => {
  try {
    const userID = req.user.id;

    if (!['CUSTOMER', 'OFFICER'].includes(req.user.role))
      return error(res, 'غير مصرح', 403);

     const data = await db.collection('complaints').where('userID', '==', userID).get();

    
    const myItems = data.docs.map(doc => doc.data());

    
    return ok(res, { complaints: myItems });

  } catch (err) {
    return error(res, 'تعذر جلب الشكاوى', 500);
  }
};

const updateComplaint = async (req, res) => {
  try {
    const { complaintID }    = req.params;
    const { title, details } = req.body;

    if (!['CUSTOMER', 'OFFICER'].includes(req.user.role))
      return error(res, 'غير مصرح', 403);

    if (!title || !details)
      return error(res, 'العنوان والتفاصيل مطلوبان', 400);

    await db.collection('complaints').doc(complaintID).update({ title, details })
    return ok(res, { message: 'تم تعديل الشكوى ✅' });

  } catch (err) {
    return error(res, err.message, 500);
  }
};

const deleteComplaint = async (req, res) => {
  try {
    const { complaintID } = req.params;

    if (!['CUSTOMER', 'OFFICER'].includes(req.user.role))
      return error(res, 'غير مصرح', 403);

    await db.collection('complaints').doc(complaintID).delete()
    return ok(res, { message: 'تم حذف الشكوى ✅' });

  } catch (err) {
    return error(res, err.message, 500);
  }
};


const getMyNotifications = async (req, res) => {
  try {
    const userId = req.user.id || req.user.uid; 
    const limit = parseInt(req.query.limit) || 5;
    const snapshot = await db.collection('notifications')
        .where('userId', '==', userId)
        .get();

   let notifications = [];
    snapshot.forEach(doc => {
        notifications.push({ id: doc.id, ...doc.data() });
    });

    notifications.sort((a, b) => {
        const timeA = a.createdAt?._seconds ? a.createdAt._seconds * 1000 : new Date(a.createdAt).getTime();
        const timeB = b.createdAt?._seconds ? b.createdAt._seconds * 1000 : new Date(b.createdAt).getTime();
        return timeB - timeA; 
    });
    notifications = notifications.slice(0, limit);
    
    return res.status(200).json({
        success: true,
        data: notifications
    });

  } catch (err) {
    console.error("Error fetching notifications:", err);
    return res.status(500).json({ success: false, message: err.message });
  }
};
const markNotificationAsRead = async (req, res) => {
    try {
        const { id } = req.params; 
        await db.collection('notifications').doc(id).update({ isRead: true });
        return res.json({ success: true, message: "تم تحديث حالة الإشعار بنجاح" });
    } catch (err) {
        console.error("Error updating notification:", err);
        return res.status(500).json({ success: false, error: err.message });
    }
};
module.exports = { submitComplaint, getMyComplaints, updateComplaint, deleteComplaint,getMyNotifications,markNotificationAsRead}; 