var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DurationSchema = new Schema(
    {
        time: {type: String, required: true}
    }
);

const Duration = mongoose.model('Duration', DurationSchema);
module.exports = Duration;