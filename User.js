const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    branch: {
        type: String,
        required: true
    },
    phoneno: {
        type:  Number,
        trim: true,
        required: true,
        unique: true
    },
    alt_phoneno: {
        type:  Number,
        trim: true
    },
    insta: {
        type: String,
        trim: true,
        unique: true
    },
    fb: {
        type: String,
        trim: true,
        unique: true
    },
    twitter: {
        type: String,
        trim: true,
        unique: true
    },
    linkedin: {
        type: String,
        trim: true,
        unique: true
    },
    photo: {
        /* data: Buffer,
        contentType: String, */
        type: String,
        trim: true
    }
},
    { timestamps: true }
)

mongoose.model('User', UserSchema)

module.exports = mongoose.model('User')