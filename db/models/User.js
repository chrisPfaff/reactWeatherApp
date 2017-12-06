var mongoose = require('mongoose');
var DB = require('../config');
var bcrypt = require('bcrypt-node');
var crypto = require('crypto');
var Promise = require('bluebird');

userSchema = new mongoose.Schema(
  {
    username: {type: String, required: true, index: {unique: true}},
    password: {type: String, required: true },
    email: {type: String, required: true}
  }
)

userSchema.pre('save', function(next) {
  var cipher = Promise.promisify(bcrypt.hash);
  return cipher(this.password, null, null).bind(this)
  .then(function(hash) {
    this.password = hash;
    next();
  });
});

userSchema.methods.comparePassword = function(pwd) {
  var comp = Promise.promisify(bcrypt.compare);
  return comp(pwd, this.password).bind(this)
  .then((match) => match);
};

var User = mongoose.model('User', userSchema);
module.exports = User;
