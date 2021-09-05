var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NatureSchema = new Schema(
    {
        identification: {type: String, required: true}
    }
);

const Duration = mongoose.model('Nature', NatureSchema);
module.exports = Nature;