let mongoose = require('mongoose');

let connect = mongoose.connect(" mongodb://127.0.0.1:27017/goodera");

module.exports=connect