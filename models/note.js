var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var NoteSchema = new Schema(
    {
        title: {type: String, required: true},
        user: {type: Schema.Types.ObjectId, ref: 'User',  required: true},
        date_created: {type: Date, default: Date.now},
        status: {type: String, required: true, enum: ['In progress', 'Finished', 'Yet to happen'], default: 'Yet to happen'}
    }
)

NoteSchema.virtual('url').get(() => {
    return '/catalog/noteinstance/' + this._id
});

module.exports = mongoose.model('Note', NoteSchema);