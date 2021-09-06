const infoMethods = require('../methods/infoMethods');
var Duration = require ('../models/duration');
var Importance = require ('../models/importance');
var Nature = require ('../models/nature');

exports.durationList = async function (req, res) {
    try {
        const response = await Duration.find();
        return res.status(200).send(response);
    } catch (error) {
        console.error('GET DURATION ERROR: ', error);
        return res.status(500).send(error);
    }
};
// MADE PUERLY FOR PURPOUSES OF FINDING OUT WHY I HAVE BRAIN DAMAGE
exports.durationInsert = async function (req, res) {
    try {
        const response = await infoMethods.createDuration(req.body);
        return res.status(200).send(response);
    } catch (error) {
        console.error('CREATE DURATION ERROR: ', error);
        return res.status(500).send(error);
    }
};

exports.importanceList = async function (req, res) {
    try {
        const response = await Importance.find();
        return res.status(200).send(response);
    } catch (error) {
        console.error('GET IMPORTANCE ERROR: ', error);
        return res.status(500).send(error);
    }
};

exports.natureList = async function (req, res) {
    try {
        const response = await Nature.find();
        return res.status(200).send(response);
    } catch (error) {
        console.error('GET NATURE ERROR: ', error);
        return res.status(500).send(error);
    }
};