var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ImportanceSchema = new Schema(
    {
        priority: {type: String, required: true}
    }
);

const Duration = mongoose.model('Importance', ImportanceSchema);
module.exports = Importance;