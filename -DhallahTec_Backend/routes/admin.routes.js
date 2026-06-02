const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { protect, allow } = require('../middleware/middleware');

router.use(protect);
router.use(allow('ADMIN'));

router.put('/review-officer', adminController.reviewOfficerRequest);

router.get('/offices', adminController.getAllOfficeRequests);
router.get('/office/:id', adminController.getOfficeDetails);
router.get('/complaints', adminController.getAllComplaints);


router.put('/complaint/respond/:complaintID', adminController.respondToComplaint);

router.put('/complaint/status/:complaintID', adminController.updateComplaintStatus);
router.get('/notifications', adminController.getAdminNotifications);
router.put('/notifications/:id/read', adminController.markNotificationAsRead);
module.exports = router;