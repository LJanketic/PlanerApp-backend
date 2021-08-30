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

const UserSchema = new Schema(
    {
        firstName: {type: String, required: true},
        username: {type: String, required: true},
        password: {type: String, required: true}
    },
    schemaOptions
);

const User = mongoose.model('User', UserSchema)
module.exports = User
