const userController = require('../controllers/registerController')

module.exports = function (app) {
  app.post('/api/user/signup', userController.signup)

  app.post('/api/user/checkUsername', userController.checkUsername)
}
