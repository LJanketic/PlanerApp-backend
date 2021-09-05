var express = require('express');
var router = express.Router();


var info_controller = require('../controllers/infoController');

router.get('/duration', info_controller.durationList);
router.get('/importance', info_controller.importanceList);
router.get('/nature', info_controller.natureList);

module.exports = router;