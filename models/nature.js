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

const NatureSchema = new Schema(
    {
        identification: {type: String, required: true}
    },
    schemaOptions
);

const Nature = mongoose.model('Nature', NatureSchema);
module.exports = Nature;