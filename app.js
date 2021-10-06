require('dotenv').config()

const express = require('express')
const app = express()

const mongoose = require('mongoose')

const UserController = require('./UserController')
app.use('/', UserController)

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB Atlas CONNECTED");
}).catch((err) => {
    console.log(err)
})

module.exports = app