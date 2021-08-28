const User = require('../models/user')
const bcrypt = require('bcryptjs')

module.exports.signup = async (user) => {
  const hash = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10)) // hash and salt
  const newUser = new User({
    firstName: user.firstName,
    username: user.username,
    password: hash
  })
  try {
    await newUser.save()
    return 'SIGNUP OK'
  } catch (error) {
    console.error(error)
  }
}

module.exports.checkUsername = async (username) => {
  try {
    const user = await User.findOne({ username: username })
    if (user) {
      console.log('\nUsername je zauzet!\n')
      return false
    } else {
      console.log('\nUsername je slobodan!\n')
      return true
    }
  } catch (error) {
    console.error(error)
  }
}