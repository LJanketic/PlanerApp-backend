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

const ImportanceSchema = new Schema(
    {
        priority: {type: String, required: true}
    },
    schemaOptions
);

const Importance = mongoose.model('Importance', ImportanceSchema);
module.exports = Importance;