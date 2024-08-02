const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.post('/', dataController.handlePostRequest);
router.get('/', dataController.handleGetRequest);

module.exports = router;
