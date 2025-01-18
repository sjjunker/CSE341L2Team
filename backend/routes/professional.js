const express = require('express');

const controller = require('../controllers/professional');

const router = express.Router();

// GET /feed/posts
router.get('/', controller.getData);
// localhost:8080/professional/
module.exports = router;