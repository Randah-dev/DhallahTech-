
const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const { protect } = require('../middleware/middleware');
router.post('/add', protect, itemController.addItem);
router.get('/', protect, itemController.getAllItems);
router.get('/my-reports', protect, itemController.getMyReports);
router.get('/officer-reports', protect, itemController.getOfficerReports);
router.put('/update-status/:itemId', protect, itemController.updateItemStatus);
router.delete('/delete/:itemId', protect, itemController.deleteItem);
module.exports = router;