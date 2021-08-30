var express = require('express');
var router = express.Router();


var note_controller = require('../controllers/noteController');

router.get('/', note_controller.noteList);
router.post('/create', note_controller.createNote);
router.delete('/delete', note_controller.deleteNote)

/* router.get('/note/create', note_controller.note_create_get);
router.get('/note/:id/delete', note_controller.note_delete_get);
router.post('/note/:id/delete', note_controller.note_delete_post);
router.get('/note/:id/update', note_controller.note_update_get);
router.post('/note/:id/update', note_controller.note_update_post);
router.get('/note/:id', note_controller.note_detail); */

module.exports = router;