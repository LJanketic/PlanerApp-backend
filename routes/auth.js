var express = require('express');
var router = express.Router();

var auth_controller = require('../controllers/authController');

router.post('/login', auth_controller.login);
router.post('/refresh', auth_controller.refresh);
router.get('/', auth_controller.getUser);
router.post('/logout', auth_controller.logout);

module.exports = router;