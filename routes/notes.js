var express = require('express');
var router = express.Router();


var note_controller = require('../controllers/noteController');

router.get('/', note_controller.noteList);

router.post('/filter', note_controller.noteFilter);

router.post('/filter/date', note_controller.filterNotesByDate);

router.post('/create', note_controller.createNote);

router.delete('/delete', note_controller.deleteNote);

router.post('/update', note_controller.updateNote);

module.exports = router;