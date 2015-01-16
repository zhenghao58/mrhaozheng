var mongoose = require('mongoose');
mongoose.connect('mongodb://ds031601.mongolab.com:31601/heroku_app33195835');
module.exports = mongoose.connection;