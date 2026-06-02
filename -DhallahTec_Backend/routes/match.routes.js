
const express = require('express');
const router = express.Router();
const matchController = require('../controllers/matchController');
const { protect } = require('../middleware/middleware');

router.get('/', protect, matchController.getUserMatches);

router.post('/refresh/:itemId', protect, matchController.refreshMatchesForItem);
router.put('/received/:matchId', protect, matchController.markAsReceived);
router.get('/:matchId', protect, matchController.getMatchDetails);
router.post('/verify-answer', protect, matchController.verifyCustomAnswer);
module.exports = router;