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
};

var DurationSchema = new Schema(
    {
        time: {type: String, required: true}
    },
    schemaOptions
);

const Duration = mongoose.model('Duration', DurationSchema);
module.exports = Duration;