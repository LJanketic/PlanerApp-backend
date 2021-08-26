var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();


/**
 * CORS
 * 
 */
const cors = require('cors');
const allowedOrigins = ['http://localhost:3000']
  app.use(cors({
    origin: function (origin, callback) { // allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true)
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = 'The CORS policy for this site does not ' +
          'allow access from the specified Origin.'
        return callback(new Error(msg), false)
      }
      return callback(null, true)
    },
    credentials: true
  }))



//Setting up mongoose selection
var mongoose = require('mongoose');
// ADD MONGODB LINK HERE BEFORE THIS APP CAN WORK
var mongoDB = 'mongodb+srv://admin:admin@planercluster.hbobd.mongodb.net/planer_db?retryWrites=true&w=majority';

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error'));

/**
 * View engine setup
 * 
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

/**
 * Logger init
 * 
 */
 app.use(logger('dev'));

/**
 * Json parser
 * 
 */
 app.use(express.json());

/**
 * URL encoding
 * 
 */

app.use(express.urlencoded({ extended: true }));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var notesRouter = require('./routes/notes');
var authRouter = require('./routes/auth');

/**
 * Cookie parser
 * 
 */

app.use(cookieParser());

/**
 * Serving static files to express
 * 
 */
app.use(express.static(path.join(__dirname, 'public')));


/**
 * Routes
 * 
 */
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/notes', notesRouter);
app.use('/auth', authRouter);

/**
 * Error handling
 * 
 * catch 404 and forward to error handler
 * 
 */
app.use(function(req, res, next) {
  next(createError(404));
});

/**
 * Error handler
 * 
 */
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.get('/', (req, res) => {
  req.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  req.header('Access-Control-Request-Method', 'http://localhost:3000')
});

module.exports = app;
