const { ok, error } = require('../utils/helpers');
const { db } = require('../utils/firebase'); 

exports.registerOffice = async (req, res) => {
    try {
        const { 
            cityName, officeName, location, fullAddress, 
            email, phone, capacity, workingHours, managerName, notes 
        } = req.body;

        const officerId = req.user.id; 
       const existingOffice = await db.collection('offices')
            .where('officerId', '==', officerId)
            .limit(1)
            .get();

        if (!existingOffice.empty) {
            return error(res, 'لديك مكتب مسجل بالفعل، لا يمكنك إنشاء أكثر من مكتب واحد', 400);
        }
        const officeData = {
            officerId, 
            cityName,
            officeName,
            location,
            fullAddress,
            email,
            phone,
            capacity: Number(capacity),
            workingHours,
            managerName,
            notes,
           //
          createdAt: require('firebase-admin').firestore.FieldValue.serverTimestamp()
        };

        const officeRef = await db.collection('offices').add(officeData);

        await db.collection('users').doc(officerId).update({
            officeId: officeRef.id
        });

        await db.collection('notifications').add({
           role: 'ADMIN', 
           title: 'طلب إنشاء مكتب جديد 🏢',
           body: `قام الموظف برفع طلب لإنشاء مكتب جديد باسم: (${officeName})`,
          createdAt: require('firebase-admin').firestore.FieldValue.serverTimestamp(),
           isRead: false,
          requestId: officeRef.id 
});

        const adminMessage = {
            topic: 'admin_notifications', 
            notification: {
                title: ' طلب إنشاء مكتب جديد',
                body: `قام الموظف برفع طلب لإنشاء مكتب جديد باسم: (${officeName})`
            }
        };
        require('firebase-admin').messaging().send(adminMessage)
            .then(() => console.log('Notification sent to Admin Topic'))
            .catch((err) => console.error('FCM Admin Topic Error:', err));

        return ok(res, { message: 'تم تسجيل المكتب بنجاح', officeId: officeRef.id }, 201);

    } catch (err) {
        console.error(err);
        return error(res, 'حدث خطأ أثناء التسجيل', 500);
    }
};

exports.getOfficerOffice = async (req, res) => {
    try {
        const officerId = req.user?.id || req.user?.uid;
        if (!officerId) {
            return res.status(401).json({ success: false, message: 'المستخدم غير معرف، يرجى إعادة تسجيل الدخول' });
        }

  
        const snapshot = await db.collection('offices')
            .where('officerId', '==', officerId)
            .limit(1)
            .get();

      
        if (snapshot.empty) {
            return res.status(404).json({ success: false, message: 'لا يوجد مكتب مسجل' });
        }

        const doc = snapshot.docs[0];
       
        const officeData = {
            id: doc.id,
            ...doc.data()
        };
        
      
        return res.status(200).json({ 
            success: true, 
            data: { office: officeData } 
        });

    } catch (err) {
       
        console.error("❌ الخطأ الفعلي اللي سبب الـ 500 هو:", err); 
        
        return res.status(500).json({ 
            success: false, 
            message: 'حدث خطأ أثناء جلب البيانات', 
            error: err.message 
        });
    }
};

exports.getDashboardStats = async (req, res) => {
    try {
        const userOfficeId = req.user.officeId; 
        const userRole = req.user.role?.toUpperCase();

        if (userRole !== 'OFFICER' || !userOfficeId) {
            return res.status(403).json({ success: false, message: "غير مصرح لك بالوصول لإحصائيات المكتب" });
        }

       
        const snapshot = await db.collection('items')
            .where('officeId', '==', userOfficeId)
            .orderBy('createdAt', 'desc')
            .get();

        let unclaimedCount = 0;   
        let returnedCount = 0;    
        let totalCloseTime = 0;  
        let closedItemsCount = 0; 

        const now = new Date();
        let monthlyNewReports = 0;
        const recentActivities = [];

       snapshot.forEach(doc => {
            const data = doc.data();
         
            const statusLower = data.status ? data.status.toLowerCase().trim() : '';
          
            if (statusLower === 'claimed' || statusLower === 'returned') {
                returnedCount++;

                const createdAt = data.createdAt ? data.createdAt.toDate() : null;
                const closedAt = data.updatedAt ? data.updatedAt.toDate() : new Date(); 

                if (createdAt) {
                    const diffTime = Math.abs(closedAt - createdAt);
                    const diffDays = diffTime / (1000 * 60 * 60 * 24); 
                    totalCloseTime += diffDays;
                    closedItemsCount++;
                }
            } 
         
            else {
                unclaimedCount++; 
            }

           
            if (data.createdAt) {
                const createdAtDate = data.createdAt.toDate();
                const diffTime = Math.abs(now - createdAtDate);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                if (diffDays <= 30) {
                    monthlyNewReports++;
                }
            }

         
            if (recentActivities.length < 3) {
                let formattedTime = "تاريخ غير محدد";
                if (data.createdAt) {
                    const dateObj = data.createdAt.toDate();
                    formattedTime = dateObj.toLocaleDateString('ar-SA') + ' - ' + dateObj.toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' });
                }
                recentActivities.push({
                    _id: doc.id,
                    itemName: data.itemName || "عنصر بدون اسم",
                    location: data.location || "غير محدد",
                    time: formattedTime
                });
            }
        });
      
        const averageCloseTime = closedItemsCount > 0 
            ? parseFloat((totalCloseTime / closedItemsCount).toFixed(1)) 
            : 0;

        return res.status(200).json({
            success: true,
            data: {
                statsData: {
                    unclaimedCount,
                    returnedCount,
                    monthlyNewReports,
                    averageCloseTime: averageCloseTime
                },
                recentActivities
            }
        });

    } catch (err) {
        console.error("Error in getDashboardStats:", err);
        return res.status(500).json({ success: false, message: "فشل في حساب الإحصائيات الحقيقية: " + err.message });
    }
};

exports.getOfficerNotifications = async (req, res) => {
    try {
        const userId = req.user.id || req.user.uid; 
        const limit = parseInt(req.query.limit) || 5;
        const snapshot = await db.collection('notifications')
            .where('userId', '==', userId)
            .orderBy('createdAt', 'desc')
            .limit(limit)
            .get();

        const notifications = [];
        snapshot.forEach(doc => {
            notifications.push({ id: doc.id, ...doc.data() });
        });

       
        return res.status(200).json({
            success: true,
            data: notifications
        });

    } catch (err) {
        console.error("Error fetching notifications:", err);
        return res.status(500).json({ success: false, message: err.message });
    }
};

exports.markNotificationAsRead = async (req, res) => {
    try {
        const notificationId = req.params.id;

        await db.collection('notifications').doc(notificationId).update({ 
            isRead: true 
        });

        return res.json({ 
            success: true, 
            message: "تم تحديث حالة قراءة إشعار الموظف بنجاح" 
        });
    } catch (err) {
        console.error("خطأ في تحديث إشعار الموظف:", err);
        return res.status(500).json({ 
            success: false, 
            error: err.message 
        });
    }
};
