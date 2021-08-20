var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var notesRouter = require('./routes/notes');

var app = express();

/* app.use(function(req, res,) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header('Access-Control-Request-Method', 'http://localhost:3000');
}); */

app.get('/', (req, res) => {
  req.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  req.header('Access-Control-Request-Method', 'http://localhost:3000')
});


//Setting up mongoose selection
var mongoose = require('mongoose');
// ADD MONGODB LINK HERE BEFORE THIS APP CAN WORK
var mongoDB = 'mongodb+srv://admin:admin@planercluster.hbobd.mongodb.net/planer_db?retryWrites=true&w=majority';

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/notes', notesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
