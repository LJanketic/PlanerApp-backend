#! /usr/bin/env node

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require('async')
var Note = require('./models/note')
var User = require('./models/user')


var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var users = []
var notes = []

function userCreate(username, password, cb) {
  userdetail = { username: username, password: password }
  
  var user = new User(userdetail);
       
  user.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New User: ' + user);
    users.push(user)
    cb(null, user)
  }  );
}

function noteCreate(title, user, date_created, status, cb) {
  notedetail = { 
    title: title,
    user: user,
    date_created: date_created,
    status: status
  }
    
  var note = new Note(notedetail);    
  note.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New note: ' + note);
    notes.push(note)
    cb(null, note)
  }  );
}

function createNotes(cb) {
    async.parallel([
        function(callback) {
            noteCreate('Do the laundry', users[0], 'In progress', callback);
        },
        function(callback) {
            noteCreate('Take out the dog', users[1], 'In progress', callback);
        },
        function(callback) {
            noteCreate('Play the piano', users[2], 'In progress', callback);
        },
        function(callback) {
            noteCreate('Water the flowers', users[3], 'Finished', callback);
        },
        function(callback) {
            noteCreate('Take a nap', users[4], 'Yet to happen', callback);
        },
        function(callback) {
            noteCreate('Test note 1', users[1], 'Yet to happen', callback);
        },
        function(callback) {
            noteCreate('Test note 2', users[2], 'Finished', callback)
        }
        ],
        cb);
}



async.series([
    createNotes,
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('Users: '+users);
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});




