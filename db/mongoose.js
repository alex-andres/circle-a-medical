var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var password = "CodeDragons2017"

mongoose.connect('mongodb://circleAdmin:CodeDragons2017@mongo0.infotechmedical.com:33857/admin')

module.exports = {mongoose};