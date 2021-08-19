var express = require('express');
var router = express.Router();

var AuthController = require('../controllers/authController');

router.post('/auth/login', AuthController.login);
router.post('/auth/refresh', AuthController.refresh);
router.get('/auth/user', AuthController.user);
router.post('/auth/logout', AuthController.logout);

module.exports = router;