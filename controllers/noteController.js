var Note = require('../models/note');
const noteMethods = require('../methods/noteMethods')

exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

exports.noteList = async function(req, res) {
    try {
        const response = await Note.find()/* .populate("user")  inner join za mongo*/;
        return res.status(200).send(response);
    } catch (error) {
        console.error('GET ALL USERS - ADMIN ERROR: ', error);
        return res.status(500).send(error);
    }
};

exports.createNote = async function(req, res) {
    try {
        const response = await noteMethods.createNote(req.body);
        return res.status(200).send(response);
    } catch (error) {
        console.error('GET ALL USERS - ADMIN ERROR: ', error);
        return res.status(500).send(error);
    }
};


/* exports.note_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: note detail: ' + req.params.id);
};

exports.note_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: note create GET');
};

exports.note_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: note delete GET');
};

exports.note_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: note delete POST');
};

exports.note_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: note update GET');
};

exports.note_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: note update POST');
};
 */
