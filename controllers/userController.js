var User = require('../models/user');

exports.user_list = async function(req, res) {
    try {
        const response = await User.find();
        return res.status(200).send(response);
    } catch (error) {
        console.error('GET ALL USERS - ADMIN ERROR: ', error);
        return res.status(500).send(error);
    }
};

exports.user_create_post = async function(req, res) {
    try {
        const newUser = new User({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username
        })
        const response = await newUser.save();
        return res.status(200).send(response);
    } catch (error) {
        console.error('GET ALL USERS - ADMIN ERROR: ', error);
        return res.status(500).send(error);
    }
};

exports.user_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: user detail: ' + req.params.id);
};

exports.user_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: user create GET');
};



exports.user_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: user delete GET');
};

exports.user_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: user delete POST');
};

exports.user_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: user update GET');
};

exports.user_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: user update POST');
};
