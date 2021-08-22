var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
        firstName: {type: String, required: true},
        username: {type: String, required: true},
        password: {type: String, required: true}
    }
);

/* UserSchema.virtual('name').get(() => {
    return this.username;
});

UserSchema.virtual('url').get(() => {
    return '/catalog/user/' + this._id
}); */

module.exports = mongoose.model('User', UserSchema);
