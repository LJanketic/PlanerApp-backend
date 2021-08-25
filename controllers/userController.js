var User = require('../models/user');
const userMethods = require('../methods/userMethods')

exports.user_list = async function(req, res) {
    try {
        const response = await User.find();
        return res.status(200).send(response);
    } catch (error) {
        console.error('GET ALL USERS - ADMIN ERROR: ', error);
        return res.status(500).send(error);
    }
};

exports.signup = async (req, res) => {
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!signup: ', req.headers)
    const newUser = req.body
    try {
      if (newUser.password === newUser.passwordMatch) {
        const response = await userMethods.signup(newUser)
        return res.status(200).send(response)
      } else {
        return res.status(400).send('ERROR: Passwords do not match.')
      }
    } catch (error) {
      console.error('SIGNUP ERROR: ', error)
      return res.status(500).send(error)
    }
  }
  
  exports.checkUsername = async (req, res) => {
    console.log('req: ', req.body.usernameToCheck)
    const username = req.body.usernameToCheck
    try {
      const response = await userMethods.checkUsername(username)
      return res.status(200).send(response)
    } catch (error) {
      console.error('USERNAME CHECK ERROR: ', error)
      return res.status(500).send(error)
    }
  }