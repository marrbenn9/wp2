const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    password: String
})

const User = mongoose.model("User", userSchema)

module.exports = User;

