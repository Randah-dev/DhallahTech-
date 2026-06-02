const express = require('express');
const router = express.Router();
const communicationController = require('../controllers/communicationController');
const { protect } = require('../middleware/middleware'); // حماية المسار

// رابط إرسال رسالة
router.post('/send', protect, communicationController.sendMessage);

// رابط جلب المحادثات
router.get('/my-chats', protect, communicationController.getMyChats);

module.exports = router;