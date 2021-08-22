var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/userController');


router.get('/', user_controller.user_list);
router.post('/register', user_controller.signup);
router.post('/checkUsername', user_controller.checkUsername);

module.exports = router;
