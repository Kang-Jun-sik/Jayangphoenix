const mongoose = require('mongoose');

const Account = new mongoose.Schema({
    userId: {type: String, unique: true, required: true},
    userPw: String,
    coin: Number,
});

module.exports = mongoose.model('User', Account);
