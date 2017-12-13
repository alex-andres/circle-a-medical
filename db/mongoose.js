var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://infotechAdmin:CodeDragons2017@mongo0.infotechmedical.com:33857/infotechmedical', { useMongoClient: true });

module.exports = { mongoose };