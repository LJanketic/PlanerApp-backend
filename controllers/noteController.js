var Note = require('../models/note');
const noteMethods = require('../methods/noteMethods')

exports.noteList = async function(req, res) {
    try {
        const response = await Note.find()/* .populate("user")  inner join za mongo*/;
        return res.status(200).send(response);
    } catch (error) {
        console.error('GET ALL USERS ERROR: ', error);
        return res.status(500).send(error);
    }
};

exports.createNote = async function(req, res) {
    try {
        const response = await noteMethods.createNote(req.body);
        return res.status(200).send(response);
    } catch (error) {
        console.error('GET ALL USERS ERROR: ', error);
        return res.status(500).send(error);
    }
};

exports.deleteNote = async function(req, res) {
    try {
        // Sljedeca linija je samo za testiranje requesta sa frontenda
        // console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!', req.body)
        const response = await noteMethods.deleteNote(req.body);
        return res.status(200).send(response);
    } catch (error) {
        console.error('DELETE NOTE ERROR: ', error);
        return res.status(500).send(error);
    }
}

exports.updateNote = async function(req, res) {
    try {
        const response = await noteMethods.updateNote(req.body);
        return res.status();
    } catch (error) {
        console.error('UPDATE ROLE ERROR: ', error);
        return res.status(500).send(error);
    }
}
