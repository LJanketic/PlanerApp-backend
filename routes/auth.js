var express = require('express');
var router = express.Router();

var AuthController = require('../controllers/authController');

router.post('/login', AuthController.login);
router.post('/refresh', AuthController.refresh);
router.get('/user', AuthController.getUser);
router.post('/logout', AuthController.logout);
router.get('/jaje', () => {res.send('jaje')})

module.exports = router;