var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const schemaOptions = {
    timestamps: true,
    toObject: {
      virtuals: true
    },
    toJSON: {
      virtuals: true
    },
    minimize: false
}

var NoteSchema = new Schema(
    {
        user: {type: String, ref: 'User',  required: true},
        title: {type: String, required: true},
        place: {type: String,  required: true},
        date: {type: Date, required: true},
        priority: {type: String, required: true},
        nature: {type: String, required: true},
        duration: {type: String, required: true},
        description: {type: String, required: true}
    },
    schemaOptions
);

const Note = mongoose.model('Note', NoteSchema);
module.exports = Note;