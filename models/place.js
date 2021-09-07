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

const PlaceSchema = new Schema(
    {
        place: {type: String, required: true}
    },
    schemaOptions
);

const Place = mongoose.model('Place', PlaceSchema);
module.exports = Place;