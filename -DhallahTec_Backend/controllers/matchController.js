
const axios = require('axios');
const admin = require('firebase-admin');
const db = admin.firestore();
const { ok, error } = require('../utils/helpers');
exports.findMatchesForNewItem = async (newItem, newItemId) => {
    try {
        const targetType = newItem.type === 'Lost' ? 'Found' : 'Lost';

        const snapshot = await db.collection('items')
          .where('type', '==', targetType)
          .where('status', '==', 'pending')
            .get();

       if (snapshot.empty) return [];
        
        const dbItems = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        if (newItem.userRole === 'OFFICER' || newItem.type === 'Found') {
            return [];
        }
        console.log("🔍 عدد العناصر المستخرجة للمقارنة من Firestore:", dbItems.length);
        
        if (dbItems.length === 0) {
            console.log("⚠️ لا توجد عناصر معاكسة في قاعدة البيانات حالياً.");
            return []; 
        }

        const aiResponse = await axios.post('http://127.0.0.1:8000/match', {
            user_report: newItem,
            database_items: dbItems
        });
        const aiMatches = aiResponse.data.matches || [];
        const batch = db.batch();
        let matchCount = 0;

        const savedMatches = [];

       aiMatches.forEach(match => {
   
        console.log("الاسم القادم من البايثون:", match.itemName);
        console.log("الأسماء الموجودة في dbItems:", dbItems.map(i => i.itemName));
        console.log("نتائج الذكاء الاصطناعي القادمة:", match);
           if (match.score >= 70)  {
                const matchRef = db.collection('matches').doc();
                const targetIdFromAI = match.id || match.itemId || match._id;
                const originalDoc = dbItems.find(i => i.id === targetIdFromAI);
                
              if (originalDoc) {
           
            const isNewItemLost = newItem.type === 'Lost';

            const matchData = {
                id: matchRef.id,
                itemName: originalDoc.itemName,
                lostItemId: isNewItemLost ? newItemId : originalDoc.id,
                foundItemId: isNewItemLost ? originalDoc.id : newItemId,
                lostUserOwnerId: isNewItemLost ? (newItem.ownerId || req.user.id) : (originalDoc.ownerId || null),
                matchScore: match.score,
                status: 'pending',
                matchedAt: admin.firestore.FieldValue.serverTimestamp()
            };

            matchCount++;
            savedMatches.push(matchData);
            batch.set(matchRef, matchData);
        } else {
            console.log(`⚠️ لم يتم العثور على مستند مطابقة في Firestore للـ ID: ${targetIdFromAI}`);
        }
    }
});

        if (matchCount > 0) {
            await batch.commit();
            console.log(` تم إنشاء ${matchCount} كروت مطابقة محتملة معلقة بنجاح.`);
            console.log("Smart Matching Completed Successfully");
            console.log("✅ قائمة المطابقات النهائية التي ستُرسل للمتصفح:", aiMatches);
         return savedMatches;
        }
        return [];
 
    } catch (err) {
      console.error("Match Algorithm Error:", err);  
    }
};


exports.getUserMatches = async (req, res) => {
  try {
        const userId = req.user?.id;
        const { itemId } = req.query;
        
        if (!userId) {
            return res.status(401).json({ success: false, message: "غير مصرح لك بالوصول، يرجى تسجيل الدخول" });
        }

        console.log(`\n بدء سحب المطابقات الحية للمستخدم [ID: ${userId}]...`);
        let matchesQuery = db.collection('matches');

       
        const userItemsSnapshot = await db.collection('items')
            .where('ownerId', '==', userId)
            .get();

        if (userItemsSnapshot.empty) {
            console.log("⚠️ المستخدم الحالي لا يملك أي بلاغات مسجلة.");
            return res.status(200).json([]);
        }

        const userItemIds = userItemsSnapshot.docs.map(doc => doc.id);
        let userSpecificMatches = [];

       
        if (itemId) {
            console.log(`🔍 جلب المطابقات الخاصة بالبلاغ المحدد فقط: ${itemId}`);
            const snapshotLost = await matchesQuery.where('lostItemId', '==', itemId).get();
            const snapshotFound = await matchesQuery.where('foundItemId', '==', itemId).get();
            const lostMatches = snapshotLost.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            const foundMatches = snapshotFound.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            userSpecificMatches = [...lostMatches, ...foundMatches];
        } else {
            console.log("📋 سيناريو احتياطي: جلب كافة المطابقات التاريخية للمستخدم");
            const snapshot = await matchesQuery.orderBy('matchedAt', 'desc').get();
            const rawMatches = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            
            userSpecificMatches = rawMatches.filter(match => 
                userItemIds.includes(match.lostItemId) || userItemIds.includes(match.foundItemId)
            );
        }

        const enrichedMatches = [];

       
        for (const match of userSpecificMatches) {
            const targetItemId = userItemIds.includes(match.lostItemId) ? match.foundItemId : match.lostItemId;
            const itemDoc = await db.collection('items').doc(targetItemId).get();
            
            if (itemDoc.exists) {
                const itemData = itemDoc.data();
                enrichedMatches.push({
                    ...match,
                    itemName: itemData.itemName, 
                    score: match.matchScore || match.score || 0,
                    description: itemData.description,
                    location: itemData.location
                });
            }
        }

        console.log(`✅ تم دمج البيانات الحية بنجاح. عدد المطابقات المجهزة للعرض: ${enrichedMatches.length}`);
        return res.status(200).json(enrichedMatches);

  } catch (err) {
        console.error("❌ Error in getUserMatches Lifespan Patch:", err);
        return res.status(500).json({ success: false, message: "خطأ في جلب التطابقات الحية" });
  }
};

exports.getMatchDetails = async (req, res) => {
  try {
    const { matchId } = req.params;
    let match = null;
    let foundItemId = null;
    const matchDoc = await db.collection('matches').doc(matchId).get();

    if (matchDoc.exists) {
        match = { id: matchDoc.id, ...matchDoc.data() };
        foundItemId = match.foundItemId;
    } else {
        
        const userId = req.user?.id; 
       
        const foundItemDoc = await db.collection('items').doc(matchId).get();
        if (!foundItemDoc.exists) {
            return res.status(404).json({
                success: false,
                message: "بلاغ العنصر الموجود غير موجود نهائياً في النظام",
            });
        }
        const foundItemData = foundItemDoc.data();

       
        const userLostItemQuery = await db.collection('items')
            .where('ownerId', '==', userId)
            .where('type', '==', 'Lost')
            .where('itemName', '==', foundItemData.itemName)
            .where('status', '==', 'pending')
            .limit(1)
            .get();

      
        if (userLostItemQuery.empty) {
            return res.status(403).json({ 
                success: false, 
                message: "❌ غير مصرح لك بالوصول؛ هذا البلاغ لا يتوافق مع أي من بلاغاتك النشطة." 
            });
        }

      
        const currentLostItemId = userLostItemQuery.docs[0].id;
        
        foundItemId = matchId;
        match = {
            id: "DIRECT_LOOKUP",
            lostItemId: currentLostItemId,
            foundItemId: matchId,
            status: "pending"
        };
    }

    
    const finalFoundItemDoc = await db.collection('items').doc(foundItemId).get();
    if (!finalFoundItemDoc.exists) {
      return res.status(404).json({
        success: false,
        message: "بلاغ العنصر الموجود غير موجود نهائياً في النظام",
      });
    }

    const foundItem = {
      id: finalFoundItemDoc.id,
      ...finalFoundItemDoc.data(),
    };

    
    let office = null;
    if (foundItem.officeId) {
      const officeDoc = await db.collection('offices').doc(foundItem.officeId).get();
      if (officeDoc.exists) {
        office = { id: officeDoc.id, ...officeDoc.data() };
      }
    }

   
    return res.status(200).json({
      success: true,
      data: {
        match,
        foundItem,
        office,
      },
    });

  } catch (err) {
    console.error("❌ Error in getMatchDetails Dynamic Lookup:", err);
    return res.status(500).json({ success: false, message: "خطأ في جلب تفاصيل المطابقة" });
  }
};
exports.refreshMatchesForItem = async (req, res) => {
  try {
    const { itemId } = req.params;
console.log(`\n=== 🔄 بدء تحديث المطابقة الذكية للعنصر [ID: ${itemId}] ===`);
    const itemDoc = await db.collection('items').doc(itemId).get();

    if (!itemDoc.exists) {
        console.log(`❌ خطأ: البلاغ بالمعرف ${itemId} غير موجود في قاعدة البيانات.`);
      return error(res, "البلاغ غير موجود", 404);
    }

    const item = {
      id: itemDoc.id,
      ...itemDoc.data(),
    };
    console.log(`📦 تم جلب بيانات البلاغ بنجاح -> الاسم: "${item.itemName}" | النوع: ${item.type}`);

    console.log(`🤖 جاري استدعاء خوارزمية الـ AI للبحث عن مطابقات معاكسة...`);
const oldMatchesLost = await db.collection('matches').where('lostItemId', '==', itemId).get();
const oldMatchesFound = await db.collection('matches').where('foundItemId', '==', itemId).get();

const deleteBatch = db.batch();
oldMatchesLost.docs.forEach(doc => deleteBatch.delete(doc.ref));
oldMatchesFound.docs.forEach(doc => deleteBatch.delete(doc.ref));
await deleteBatch.commit();
    const matches = await exports.findMatchesForNewItem(item, itemId);
console.log(`📊 إجمالي النتائج الخام العائدة من سيرفر الـ AI:`, matches ? matches.length : 0);
    const validMatches = (matches || []).filter((m) => (m.score || m.matchScore || 0) >= 70);
console.log(`🎯 عدد المطابقات المؤهلة بعد التصفية (Score >= 70%):`, validMatches.length);
    if (validMatches.length === 0) {
     await db.collection('items').doc(itemId).update({
    status: "pending",
});

      return ok(res, {
        message: "لم يتم العثور على مطابقة مناسبة",
        matches: [],
      });
    }
console.log(`=== 🏁 نهاية عملية التحديث بنجاح [النتيجة: تم العثور على مطابقة وترحيلها لـ /matches] ===\n`);
    return ok(res, {
  message: "تم العثور على نتائج مطابقة",
  matches: validMatches.map((m) => ({
    ...m,
    score: m.score || m.matchScore || 0,
    matchScore: m.matchScore || m.score || 0,
  })),
});

  } catch (err) {
    console.error("Error in refreshMatchesForItem:", err);
    return error(res, "خطأ في تحديث نتائج المطابقة", 500);
  }
};
exports.verifyCustomAnswer = async (req, res) => {
    try {
        const { matchId, userAnswer } = req.body;
        
        let lostItemId = null;
        let foundItemId = matchId; 
        let isDirectItemId = true;

       
        const matchDoc = await db.collection('matches').doc(matchId).get();
        
        if (matchDoc.exists) {
            const matchData = matchDoc.data();
            lostItemId = matchData.lostItemId;
            foundItemId = matchData.foundItemId;
            isDirectItemId = false;
        }
        else {
    const matchQuery = await db.collection('matches').where('foundItemId', '==', matchId).limit(1).get();
    if (!matchQuery.empty) {
        lostItemId = matchQuery.docs[0].data().lostItemId;
        isDirectItemId = false; 
    }
}
        
        
        const foundItemDoc = await db.collection('items').doc(foundItemId).get();
        if (!foundItemDoc.exists) {
            return res.status(404).json({ success: false, message: "❌ البلاغ المرتبط بهذا المعرف غير موجود في النظام." });
        }

        
        const foundItem = foundItemDoc.data();
        const cleanCorrect = foundItem.correctAnswer?.trim().toLowerCase();
        const cleanUser = userAnswer?.trim().toLowerCase();

        if (cleanCorrect && cleanCorrect !== cleanUser) {
            return res.status(400).json({ success: false, message: "❌ إجابة التحقق غير صحيحة، يرجى المحاولة مرة أخرى." });
        }

     const batch = db.batch();
        
        if (!isDirectItemId) {
            const matchQuery = await db.collection('matches').where('foundItemId', '==', matchId).limit(1).get();
            const finalMatchId = matchDoc.exists ? matchId : matchQuery.docs[0].id;
            batch.update(db.collection('matches').doc(finalMatchId), {  status:'matched' });
        }

        
        batch.update(db.collection('items').doc(foundItemId), {  status:'matched' }); 
        let finalLostItemId = lostItemId;
        //
        if (lostItemId) {
            batch.update(db.collection('items').doc(lostItemId), {  status:'matched' });
        } else {
            const lostItemQuery = await db.collection('items')
                .where('type', '==', 'Lost')
                .where('itemName', '==', foundItem.itemName)
                .where('status', '==', 'pending')
                .limit(1)
                .get();
                
            if (!lostItemQuery.empty) {
              //
                finalLostItemId = lostItemQuery.docs[0].id;
                batch.update(db.collection('items').doc(finalLostItemId), { status: 'matched' });
            }
        }

        await batch.commit();
      try {
            if (finalLostItemId) {
                const lostItemDoc = await db.collection('items').doc(finalLostItemId).get();
                if (lostItemDoc.exists) {
                    const lostItemData = lostItemDoc.data();
                    const realCustomerOwnerId = lostItemData.ownerId; 

                    if (realCustomerOwnerId) {
                        const customerDoc = await db.collection('users').doc(realCustomerOwnerId).get();
                        if (customerDoc.exists) {
                            const customerData = customerDoc.data();
                            const customerFcmToken = customerData.fcmToken || null;

                            const customerTitle = '🎉 تمت مطابقة عنصرك بنجاح!';
                            const customerBody = `عنصرك "${foundItem.itemName}" تمت مطابقته والتحقق من ملكيته. يرجى التوجه للمكتب للاستلام.`;
                            await db.collection('notifications').add({
                                userId: realCustomerOwnerId,
                                title: customerTitle,
                                body: customerBody,
                                createdAt: admin.firestore.FieldValue.serverTimestamp(),
                                isRead: false,
                                matchId: matchId
                            });
                            if (customerFcmToken) {
                                const message = {
                                    token: customerFcmToken,
                                    notification: { title: customerTitle, body: customerBody }
                                };
                                admin.messaging().send(message)
                                    .then(() => console.log('✅ FCM sent to Customer regarding successful match.'))
                                    .catch((err) => console.error('❌ FCM Error for Customer match:', err));
                            }
                        }
                    }
                }
            }

           
            if (foundItem.officeId) {
                const officersSnapshot = await db.collection('users')
                    .where('officeId', '==', foundItem.officeId)
                    .where('role', '==', 'OFFICER')
                    .limit(1)
                    .get();

                if (!officersSnapshot.empty) {
                    const officerDoc = officersSnapshot.docs[0];
                    const officerId = officerDoc.id;
                    const officerData = officerDoc.data();
                    const officerFcmToken = officerData.fcmToken || null;

                    const officerTitle = '🤝 مطابقة جديدة جاهزة للتسليم!';
                    const officerBody = `تمت مطابقة بنجاح للعنصر "${foundItem.itemName}" في مكتبك. يرجى مراجعة تفاصيل التسليم.`;

                    await db.collection('notifications').add({
                        userId: officerId,
                        title: officerTitle,
                        body: officerBody,
                        createdAt: admin.firestore.FieldValue.serverTimestamp(),
                        isRead: false,
                        matchId: matchId
                    });

                    if (officerFcmToken) {
                        const message = {
                            token: officerFcmToken,
                            notification: { title: officerTitle, body: officerBody }
                        };
                        admin.messaging().send(message)
                            .then(() => console.log('✅ FCM sent to Officer regarding successful match.'))
                            .catch((err) => console.error('❌ FCM Error for Officer match:', err));
                    }
                }
            }
        } catch (notifError) {
            console.error("⚠️ حدث خطأ أثناء محاولة إرسال إشعارات التطابق:", notifError);
        }
        return res.status(200).json({ success: true, message: "✅ تم التحقق بنجاح وتحويل حالة البلاغ إلى (تمت المطابقة)!" });
    } catch (err) {
        console.error("Error in verifyCustomAnswer Dynamic Patch:", err);
        return res.status(500).json({ success: false, message: err.message });
    }
};
exports.markAsReceived = async (req, res) => {
  try {
    const { matchId } = req.params;

    const matchDoc = await db.collection('matches').doc(matchId).get();

    if (!matchDoc.exists) {
      return error(res, "المطابقة غير موجودة", 404);
    }

    const match = matchDoc.data();
    const userId = req.user?.id;

const userItemsSnapshot = await db.collection('items')
  .where('ownerId', '==', userId)
  .get();

const userItemIds = userItemsSnapshot.docs.map(doc => doc.id);

if (
  !userItemIds.includes(match.lostItemId) &&
  !userItemIds.includes(match.foundItemId)
) {
  return res.status(403).json({
    success: false,
    message: "ليس لديك صلاحية لتحديث هذه المطابقة",
  });
}

    await db.collection('matches').doc(matchId).update({
      status: "received",
      receivedAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    if (match.lostItemId) {
      await db.collection('items').doc(match.lostItemId).update({
       status: "received",
      });
    }

    if (match.foundItemId) {
      await db.collection('items').doc(match.foundItemId).update({
       status: "received",
      });
    }

    return ok(res, { message: "تم تحديث الحالة إلى تم الاستلام" });
  } catch (err) {
    console.error("Error in markAsReceived:", err);
    return error(res, "خطأ في تحديث حالة الاستلام", 500);
  }
};