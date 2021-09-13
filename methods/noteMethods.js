const Note = require('../models/note')

module.exports.createNote = async (noteData) => {
    const newNote = new Note({
        user: noteData.user,
        title: noteData.title,
        place: noteData.place,
        date: noteData.date,
        priority: noteData.priority,
        nature: noteData.nature,
        duration: noteData.duration,
        description: noteData.description
    })
    try {
        await newNote.save()
        return 'NOTE POST OK'
    } catch (error) {
        console.error(error)
    }
};

module.exports.filterNotes = async (filterData) => {
    const myQuery = {}
    if (filterData.user && filterData.user !== null) {
        myQuery.user = filterData.user
    }
    if (filterData.duration && filterData.duration !== null) {
        myQuery.duration = filterData.duration
    }
    if (filterData.nature && filterData.nature !== null) {
        myQuery.nature = filterData.nature
    }
    if (filterData.place && filterData.place !== null) {
        myQuery.place = filterData.place
    }
    if (filterData.priority && filterData.priority !== null) {
        myQuery.priority = filterData.priority
    }
    try {
        const result = await Note.find(myQuery)
        console.log(result)
        return result
    } catch (error) {
        console.error(error);
    } 
};

module.exports.deleteNote = async (noteData) => {
    const myQuery = { user: noteData.user, title: noteData.title, date: noteData.date, description: noteData.description }
    try {
        await Note.deleteOne(myQuery)
        return 'DELETE OK'
    } catch (error) {
        console.error(error)
    }
};

module.exports.updateNote = async (noteData) => {
    const myQuery = { user: noteData.user, title: noteData.titleToCheck, date: noteData.dateToCheck, description: noteData.descriptionToCheck }
    const newValues = { $set: { user: noteData.user, title: noteData.title, place: noteData.place, status: noteData.status, date: noteData.date, priority: noteData.priority, nature: noteData.nature, description: noteData.description } }
    try {
        await Note.updateOne(myQuery, newValues)
        return 'UPDATE OK'
    } catch (error) {
        console.error(error)
    }
};