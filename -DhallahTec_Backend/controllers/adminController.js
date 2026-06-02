const admin = require('firebase-admin');
const db = admin.firestore();
const { ok, error } = require('../utils/helpers');


const reviewOfficerRequest = async (req, res) => {
    try {
        const { requestId, action } = req.body; // action: 'approve' أو 'reject'

        const requestRef = db.collection('offices').doc(requestId);
        const requestDoc = await requestRef.get();

        if (!requestDoc.exists) {
            return error(res, "الطلب غير موجود", 404);
        }
 const requestData = requestDoc.data();

const userDoc = await db.collection('users').doc(requestData.officerId).get();
 const userFcmToken = userDoc.exists ? userDoc.data().fcmToken : null;
 //
        if (action === 'approve') {
          const officeIdFromDoc = requestDoc.id;
            await db.collection('users').doc(requestData.officerId).update({
        officeId: officeIdFromDoc,     
        officeStatus: 'approved' ,
        role: 'OFFICER'        
    });

          
            await requestRef.update({ status: 'approved' });
            const textTitle = 'تم قبول طلبك بنجاح! ';
            const textBody = `تهانينا، تم اعتماد مكتبك (${requestData.officeName || 'المطلوب'})في المنصة`;
           
            await db.collection('notifications').add({
                userId: requestData.officerId,
                title: textTitle,
                body: textBody,
                createdAt: new Date(), 
                isRead: false
            });

           if (userFcmToken) {
                const message = {
                    token: userFcmToken,
                    notification: {
                        title: textTitle,
                        body: textBody
                    }
                };
                admin.messaging().send(message)
                    .then(() => console.log('Notification sent to officer: Approved ✅'))
                    .catch((err) => console.error('FCM Error:', err));
            }
            //

            return ok(res, { message: "تم قبول الموظف وتحديث صلاحياته بنجاح" });
        } 
        
        if (action === 'reject') {
            await requestRef.update({ status: 'rejected' });
            const rejectTitle = 'تحديث بشأن طلب المكتب ';
            const rejectBody = `نعتذر منك، تم رفض طلب إنشاء مكتبك (${requestData.officeName || 'المطلوب'}).`;
          
            await db.collection('notifications').add({
                userId: requestData.officerId,
                title: rejectTitle,
                body: rejectBody,
                createdAt: new Date(),
                isRead: false
            });
      
            if (userFcmToken) {
                const message = {
                    token: userFcmToken,
                    notification: {
                        title: rejectTitle,
                        body: rejectBody
                    }
                };
                admin.messaging().send(message)
                    .then(() => console.log('Notification sent to officer: Rejected ❌'))
                    .catch((err) => console.error('FCM Error:', err));
            }
            //
            return ok(res, { message: "تم رفض الطلب بنجاح" });
        }

    } catch (err) {
        console.error("Error Detail:", err); 
        return error(res, "حدث خطأ أثناء معالجة الطلب: " + err.message, 500);
    }
};


const getAllComplaints = async (req, res) => {
  try {
    if (req.user.role !== 'ADMIN')
      return error(res, 'غير مصرح', 403);

    const complaintsSnapshot = await db.collection('complaints')
    .orderBy('createdAt', 'desc')
    .get();

    const complaints = complaintsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return ok(res, { complaints });

  } catch (err) {
    return error(res, err.message, 500);
  }
};

const respondToComplaint = async (req, res) => {
  try {
    const { complaintID } = req.params;
    const { response }    = req.body;

    if (req.user.role !== 'ADMIN')
      return error(res, 'غير مصرح', 403);

    if (!response)
      return error(res, 'الرد مطلوب', 400);
  
    const complaintRef = db.collection('complaints').doc(complaintID);
    const complaintDoc = await complaintRef.get();

    if (!complaintDoc.exists) {
      return error(res, 'الشكوى غير موجودة', 404);
    }
    const complaintData = complaintDoc.data();
    const targetUserId = complaintData.userID;
    // 
    await complaintRef.update({
       adminResponse: response,
       status: 'تم الحل'
     })
     const userDoc = await db.collection('users').doc(targetUserId).get();
    const userFcmToken = userDoc.exists ? userDoc.data().fcmToken : null;

    const notifTitle = ' تم الرد على شكواك';
    const notifBody = `قام المسؤول بالرد على شكواك: "${complaintData.title || ''}"`;

   
    await db.collection('notifications').add({
      userId: targetUserId,
      title: notifTitle,
      body: notifBody,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      isRead: false,
      complaintId: complaintID 
     });

        if (userFcmToken) {
      const message = {
        token: userFcmToken,
        notification: {
          title: notifTitle,
          body: notifBody
        }
      };
      admin.messaging().send(message)
        .then(() => console.log('Notification sent to user regarding complaint response ✅'))
        .catch((err) => console.error('FCM Error for complaint response:', err));
    }
    return ok(res, { message: 'تم إرسال الرد ' });

  } catch (err) {
    return error(res, err.message, 500);
  }
};

const updateComplaintStatus = async (req, res) => {
  try {
    const { complaintID } = req.params;
    const { status }      = req.body;

    if (req.user.role !== 'ADMIN')
      return error(res, 'غير مصرح', 403);

    if (!['مفتوحة', 'قيد المعالجة', 'تم الحل'].includes(status))
      return error(res, 'الحالة غير صحيحة', 400);

   await db.collection('complaints').doc(complaintID).update({ status })
    return ok(res, { message: 'تم تحديث الحالة ' });

  } catch (err) {
    return error(res, err.message, 500);
  }
};
const getAllOfficeRequests = async (req, res) => {
  try {
    const snapshot = await db.collection('offices').get();
    const requests = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return ok(res, requests);
  } catch (err) {
    return error(res, err.message, 500);
  }
};
const getOfficeDetails = async (req, res) => {
  try {
   const { id } = req.params; // 

   
    const doc = await db.collection('offices').doc(id).get();

    if (!doc.exists) {
      return error(res, "المكتب غير موجود", 404);
    }

    const officeData = {
      id: doc.id,
      ...doc.data()
    };

    return ok(res, officeData);

  } catch (err) {
    console.error("خطأ في getOfficeDetails:", err);
    return error(res, err.message, 500);
  }
};
const getAdminNotifications = async (req, res) => {
    try {
       
        if (req.user.role !== 'ADMIN') {
            return error(res, 'غير مصرح لك بالوصول لإشعارات الأدمن', 403);
        }

            const limit = parseInt(req.query.limit) || 10;
            const snapshot = await db.collection('notifications')
            .where('role', '==', 'ADMIN')
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
        return ok(res, notifications); 

    } catch (err) {
        console.error("Error fetching admin notifications:", err);
        return error(res, err.message, 500);
    }
};
const markNotificationAsRead = async (req, res) => {
    try {
       
        await db.collection('notifications').doc(req.params.id).update({ isRead: true });
        return res.json({ success: true, message: "تم تحديث حالة الإشعار بنجاح" });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

module.exports = {getAllComplaints, respondToComplaint, reviewOfficerRequest , updateComplaintStatus ,getAllOfficeRequests,getOfficeDetails, getAdminNotifications , markNotificationAsRead }; 