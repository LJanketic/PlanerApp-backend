var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
        username: {type: String, required: true, maxLength: 20},
        password: {type: String, reuqired: true, maxlength: 50}
    }
);

UserSchema.virtual('name').get(() => {
    return this.username;
});

UserSchema.virtual('url').get(() => {
    return '/catalog/user/' + this._id
});

module.exports = mongoose.model('User', UserSchema);
