var mongoose = require('mongoose');
mongoose.connect('mongodb://zhenghao58:8663370@ds031601.mongolab.com:31601/heroku_app33195835');
module.exports = mongoose.connection;