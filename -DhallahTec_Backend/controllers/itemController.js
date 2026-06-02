
const admin = require('firebase-admin');
const db = admin.firestore();
const { ok, error } = require('../utils/helpers');
const matchController = require('./matchController');


exports.addItem = async (req, res) => {
    try {
      const { itemName, category, color, description, location, date, type, imageUrl, verificationQuestion, correctAnswer } = req.body;
        const userRole = req.user.role; 
        const userOfficeId = req.user.officeId;

        const formattedRole = userRole?.toUpperCase();

if (formattedRole === 'OFFICER' && type !== 'Found') {
    return res.status(403).json({ 
        success: false, 
        message: 'عذراً، بصفتك موظف مكتب المفقودات يمكنك فقط رفع بلاغات من نوع (موجود - Found)' 
    });
}

if ((formattedRole === 'CUSTOMER' || formattedRole === 'GUEST') && type !== 'Lost') {
    return res.status(403).json({ 
        success: false, 
        message: 'عذراً، يمكن للمستخدمين والضيوف رفع بلاغات من نوع (مفقود - Lost) فقط' 
    });
}
        const newItem = {
            itemName,
            category,
            color: color || "",
            description: description || "",
            location,
            date: new Date(date),
            type, 
            status:'pending',
            imageUrl: imageUrl || "",
           ownerId: req.user.id,
           userRole: formattedRole,
           officeId: userOfficeId || null,
            verificationQuestion: type === 'Found' ? verificationQuestion : null,
            correctAnswer: type === 'Found' ? correctAnswer : null,
            createdAt: admin.firestore.FieldValue.serverTimestamp()
        };

        const docRef = await db.collection('items').add(newItem);
        let matches = [];
        if (formattedRole !== 'OFFICER') {
            try {
                console.log(" AI والمطابقة الذكية ن...");
                matches = await matchController.findMatchesForNewItem(newItem, docRef.id);
            } catch (aiErr) {
                console.error("⚠️ فشل اتصال سيرفر البايثون ولكن تم حفظ البلاغ:", aiErr.message);
            }
        } else {
            console.log(" تم حفظ البلاغ");
        }

       
        return res.status(201).json({
            success: true,
            message: "تمت إضافة البلاغ بنجاح",
            data: {
                id: docRef.id,
                matches: matches || []
            }
        });
    } catch (err) {
        return res.status(500).json({ success: false, message: "فشل في إضافة العنصر: " + err.message });
    }
};

exports.addGuestItem = async (req, res) => {
  try {
    const {
      itemName,
      category,
      color,
      type,
      location,
      date,
      description,
      guestPhone,
      guestID
    } = req.body;

    if (!itemName || !category || !type || !location || !date) {
      return res.status(400).json({
        success: false,
        message: "جميع الحقول مطلوبة"
      });
    }

    if (type !== "Lost") {
      return res.status(403).json({
        success: false,
        message: "الضيف يمكنه إضافة بلاغات مفقود فقط"
      });
    }

    const newItem = {
      itemName,
      category,
      color: color || "",
      type: "Lost",
      location,
      date,
      description: description || "",
      userRole: "GUEST",
      guestPhone,
      guestID,
      status:'pending',
      createdAt: new Date()
    };

    const docRef = await db.collection("items").add(newItem);

    return res.status(201).json({
      success: true,
      message: "تم إنشاء بلاغ الضيف بنجاح",
      data: {
        itemID: docRef.id,
        item: newItem,
        matches: []
      }
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

exports.getAllItems = async (req, res) => {
    try {
        const userId = req.user?.id;
        const userOfficeId = req.user?.officeId;
        const userRole = req.user?.role?.toUpperCase();

        if (!userId) {
            return res.status(401).json({ success: false, message: "غير مصرح لك بالوصول، يرجى تسجيل الدخول" });
        }

        if (userRole === 'OFFICER' && userOfficeId) {
            const snapshot = await db.collection('items')
                .where('officeId', '==', userOfficeId)
                .get();
                
            const items = snapshot.docs.map(doc => ({ id: doc.id, _id: doc.id, ...doc.data() }));
            return res.status(200).json({ success: true, data: items });
        }

        const snapshot = await db.collection('items')
            .where('ownerId', '==', userId)
            .get();
            
        const items = snapshot.docs.map(doc => ({ id: doc.id, _id: doc.id, ...doc.data() }));
        return res.status(200).json({ success: true, data: items });

    } catch (err) {
        console.error("Error in secured getAllItems:", err);
        return res.status(500).json({ success: false, message: "خطأ في جلب البيانات المحمية" });
    }
};

exports.getMyReports = async (req, res) => {
    try {
        const snapshot = await db.collection('items').where('ownerId', '==', req.user.id).get();
        const items = snapshot.docs.map(doc => ({ id: doc.id, _id: doc.id, ...doc.data() }));
        return res.status(200).json({ success: true, data: items });
    } catch (err) {
        return res.status(500).json({ success: false, message: "خطأ في جلب بلاغاتك" });
    }
};

exports.getOfficerReports = async (req, res) => {
    try {
        const userOfficeId = req.user.officeId;

        if (!userOfficeId) {
            return res.status(400).json({ success: false, message: "هذا الحساب غير مرتبط بمكتب مفقودات" });
        }

        const snapshot = await db.collection('items')
            .where('officeId', '==', userOfficeId)
            .get();

        const reports = snapshot.docs.map(doc => ({
            _id: doc.id,
            id: doc.id,
            ...doc.data()
        }));

        return res.status(200).json({ success: true, data: reports });
    } catch (error) {
        console.error("Error in getOfficerReports:", error);
        return res.status(500).json({ success: false, message: "فشل جلب بلاغات المكتب" });
    }
};

exports.updateItemStatus = async (req, res) => {
    try {
        const { itemId } = req.params;
        const { status, itemName, category, location, description } = req.body;

       
        const updatedData = {};
        
        if (status) updatedData.status = status;
        if (itemName) updatedData.itemName = itemName;
        if (category) updatedData.category = category;
        if (location) updatedData.location = location;
        if (description !== undefined) updatedData.description = description;

       
        await db.collection('items').doc(itemId).update(updatedData);

        return res.status(200).json({
            success: true,
            message: "تم تحديث البلاغ بنجاح"
        });
    } catch (err) {
        console.error("Error in updateItemStatus:", err);
        return res.status(500).json({ success: false, message: "حدث خطأ أثناء التحديث" });
    }
};


exports.deleteItem = async (req, res) => {
    try {
        const { itemId } = req.params;
        await db.collection('items').doc(itemId).delete();

        return res.status(200).json({
            success: true,
            message: "تم حذف البلاغ بنجاح من النظام"
        });
    } catch (err) {
        console.error("Error in deleteItem:", err);
        return res.status(500).json({ success: false, message: "حدث خطأ أثناء حذف البلاغ" });
    }
};