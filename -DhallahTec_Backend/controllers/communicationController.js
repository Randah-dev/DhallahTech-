const admin = require('firebase-admin');
const db = admin.firestore();


exports.sendMessage = async (req, res) => {
    try {
        const { receiverId, message, officeId } = req.body;
        const senderId = req.user.id; 

        const [senderDoc, receiverDoc, officeDoc] = await Promise.all([
            db.collection('users').doc(senderId).get(),
            db.collection('users').doc(receiverId).get(),
            officeId ? db.collection('offices').doc(officeId).get() : Promise.resolve(null)
        ]);

        if (!senderDoc.exists || !receiverDoc.exists) {
            return res.status(404).json({ error: "أحد أطراف المحادثة غير موجود" });
        }

        const senderData = senderDoc.data();
        const receiverData = receiverDoc.data();

        if (senderData.role === receiverData.role) {
            return res.status(403).json({ error: "غير مسموح بالتواصل بين مستخدمين من نفس الفئة" });
        }

        if (senderData.role === 'officer' && officeDoc && officeDoc.exists) {
            if (officeDoc.data().officerId !== senderId) {
                return res.status(403).json({ error: "ليس لديك صلاحية التحدث باسم هذا المكتب" });
            }
        }

        const messageData = {
            senderId,
            receiverId,
            participants: [senderId, receiverId],
            message: message.trim(),
            senderName: senderData.firstName || senderData.name || "مستخدم", 
            receiverName: receiverData.officeName || receiverData.firstName || "مستلم",
            
            officeId: officeId || null,
            timestamp: admin.firestore.FieldValue.serverTimestamp(),
            status: 'sent'
        };
        const docRef = await db.collection('chats').add(messageData);
       try {
       
            const notificationSenderName = senderData.role === 'officer' 
                ? (senderData.officeName || "مكتب المفقودات") 
                : (senderData.firstName || "مستخدم");

            const notificationTitle = `💬 رسالة جديدة من ${notificationSenderName}`;
            const notificationBody = message.length > 60 ? `${message.substring(0, 60)}...` : message;

            await db.collection('notifications').add({
                userId: receiverId,
                title: notificationTitle,
                body: notificationBody,
                type: 'chat_message', 
                senderId: senderId,
                createdAt: admin.firestore.FieldValue.serverTimestamp(),
                isRead: false
            });

           
            const receiverFcmToken = receiverData.fcmToken || null;
            if (receiverFcmToken) {
                const fcmMessage = {
                    token: receiverFcmToken,
                    notification: {
                        title: notificationTitle,
                        body: notificationBody
                    },
                    
                    data: {
                        click_action: "FLUTTER_NOTIFICATION_CLICK",
                        senderId: senderId,
                        officeId: officeId || ""
                    }
                };

                admin.messaging().send(fcmMessage)
                    .then(() => console.log(`✅ FCM sent successfully to user [ID: ${receiverId}] regarding new message.`))
                    .catch((err) => console.error('❌ FCM Error for chat message:', err));
            }
        } catch (notifError) {
  
            console.error("⚠️ حدث خطأ غير متوقع أثناء محاولة إرسال إشعار الرسالة:", notifError);
        }
        res.status(201).json({ 
            success: true, 
            messageId: docRef.id 
        });

    } catch (error) {
        console.error("Error in sendMessage:", error);
        res.status(500).json({ error: "حدث خطأ أثناء إرسال الرسالة" });
    }
};


exports.getMyChats = async (req, res) => {
    try {
        const userId = req.user.id;
        const snapshot = await db.collection('chats')
            .where('participants', 'array-contains', userId)
            .orderBy('timestamp', 'desc')
            .get();

        const chats = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        res.status(200).json(chats);
    } catch (error) {
        console.error("Error in getMyChats:", error);
        res.status(500).json({ error: "فشل في جلب المحادثات" });
    }
};