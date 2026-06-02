const express = require('express');
const router = express.Router();
const complaintController = require('../controllers/complaintController'); // تأكدي من المسار
const { protect } = require('../middleware/middleware'); // ميدل وير التحقق من التوكن
const { getMyNotifications } = require('../controllers/complaintController');
// 1. إرسال شكوى جديدة
router.post('/submit', protect, complaintController.submitComplaint);

// 2. جلب شكاوى المستخدم المسجل دخوله
router.get('/my', protect, complaintController.getMyComplaints);

// 3. تعديل شكوى 
router.put('/update/:complaintID', protect, complaintController.updateComplaint);

// 4. حذف شكوى
router.delete('/delete/:complaintID', protect, complaintController.deleteComplaint);
router.get('/my-notifications', protect, complaintController.getMyNotifications);
router.put('/notifications/:id/read', protect, complaintController.markNotificationAsRead);

module.exports = router;