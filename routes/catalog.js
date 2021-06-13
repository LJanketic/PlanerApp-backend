var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/userController');
var note_controller = require('../controllers/noteController');

// NOTE 
router.get('/', note_controller.index);
router.get('/note/create', note_controller.note_create_get);
router.post('/note/create', note_controller.note_create_post);
router.get('/note/:id/delete', note_controller.note_delete_get);
router.post('/note/:id/delete', note_controller.note_delete_post);
router.get('/note/:id/update', note_controller.note_update_get);
router.post('/note/:id/update', note_controller.note_update_post);
router.get('/note/:id', note_controller.note_detail);
router.get('/notes', note_controller.note_list);


// USER
router.get('/user/create', user_controller.user_create_get);
router.post('/user/create', user_controller.user_create_post);
router.get('/user/:id/delete', user_controller.user_delete_get);
router.post('/user/:id/delete', user_controller.user_delete_post);
router.get('/user/:id/update', user_controller.user_update_get);
router.post('/user/:id/update', user_controller.user_update_post);
router.get('/user/:id', user_controller.user_detail);
router.get('/users', user_controller.user_list);
module.exports = router;