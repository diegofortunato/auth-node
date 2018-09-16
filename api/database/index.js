const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/authNode')
mongoose.Promise = global.Promise

module.exports = mongoose