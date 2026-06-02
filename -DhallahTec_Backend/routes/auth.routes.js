const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); 

const { protect } = require('../middleware/middleware'); 
// مسار تسجيل مستخدم جديد
router.post('/register', authController.register);
router.post('/verify', authController.verifyAccount);
// مسار تسجيل الدخول
router.post('/login', authController.login);


router.post('/guest', authController.guestAccess);
router.post('/guest/verify', authController.verifyGuest);  
router.post('/resend-code', authController.resendCode);
router.post('/forgot-password', authController.forgotPassword); 
router.post('/reset-password', authController.resetPassword); 
router.get('/profile', protect, authController.getProfile);
router.put('/profile', protect, authController.updateProfile); 
router.delete('/profile', protect, authController.deleteAccount); 
module.exports = router;