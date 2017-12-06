//require mongoose to config db
var mongoose = require('mongoose');

//set mongoose db url
var url = 'mongodb://127.0.0.1/db';

//connect the mongoose serve to the db
mongoose.connect(url);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection errorL:'));
db.once('open', () => {
  console.log('mongoose server connected');
});

module.exports = db;
