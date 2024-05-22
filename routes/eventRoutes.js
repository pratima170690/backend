const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/events', authMiddleware, eventController.getAllEvents);
router.post('/events', authMiddleware, eventController.createEvent);

module.exports = router;

