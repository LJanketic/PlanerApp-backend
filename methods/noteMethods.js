const Note = require('../models/note')

module.exports.createNote = async (noteData) => {
    const newNote = new Note({
        user: noteData.user,
        title: noteData.title,
        place: noteData.place,
        status: noteData.status,
        date: noteData.date,
        priority: noteData.priority,
        nature: noteData.nature,
        description: noteData.description
    });
    try {
        await newNote.save();
        return 'NOTE POST OK';
    } catch (error) {
        console.error(error);
    }
};

module.exports.deleteNote = async (noteData) => {
    const myQuery = { user: noteData.user, title: noteData.title, date: noteData.date, description: noteData.description }
    try {
        await Note.deleteOne(myQuery);
        return 'DELETE OK';
    } catch (error) {
        console.error(error);
    }
};

module.exports.updateNote = async (noteData) => {
    const myQuery = {};
    const newValues = {};
    try {

    } catch (error) {
        console.error(error);
    }
}