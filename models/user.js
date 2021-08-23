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

/* UserSchema.virtual('name').get(() => {
    return this.username;
});

UserSchema.virtual('url').get(() => {
    return '/catalog/user/' + this._id
}); */

const User = mongoose.model('User', UserSchema)
module.exports = User
