var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
        first_name: {type: String, required: true, maxLength: 20},
        last_name: {type: String, required: true, maxLength: 20},
        username: {type: String, required: true, maxLength: 20}
    }
);

UserSchema.virtual('name').get(() => {
    return this.first_name + '' + this.last_name;
});

UserSchema.virtual('url').get(() => {
    return '/catalog/user/' + this._id
});

module.exports = mongoose.model('User', UserSchema);
