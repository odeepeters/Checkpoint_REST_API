// model/user.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: false },
    favoriteFoods: { type: [String], required: false }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
