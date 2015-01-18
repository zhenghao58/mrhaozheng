var mongoose = require('mongoose');
module.exports = mongoose.model('Comment', {
  email: String,
  name: String,
  message: String
});