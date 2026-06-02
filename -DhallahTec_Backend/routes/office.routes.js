const express = require('express');
const router = express.Router();
const officeController = require('../controllers/officeController');
const { protect } = require('../middleware/middleware'); 

// 1. مسار تسجيل مكتب جديد (محمي بـ protect)
router.post('/register', protect, officeController.registerOffice);

// 2. مسار جلب بيانات المكتب للموظف (محمي بـ protect)
router.get('/my-office', protect, officeController.getOfficerOffice);
router.get('/dashboard-stats', protect, officeController.getDashboardStats);
router.get('/my-notifications', protect, officeController.getOfficerNotifications);
router.put('/notifications/:id/read', protect, officeController.markNotificationAsRead);
module.exports = router;