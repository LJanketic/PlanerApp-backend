var express = require('express');
var router = express.Router();


var info_controller = require('../controllers/infoController');

router.get('/duration', info_controller.durationList);
router.get('/importance', info_controller.importanceList);
router.get('/nature', info_controller.natureList);
router.get('/places', info_controller.placesList);
router.post('/duration/create', info_controller.durationInsert);

module.exports = router;