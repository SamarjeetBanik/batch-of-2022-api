const express = require('express')
const router = express.Router()

const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

const User = require('./User')

// ADD NEW USER
router.post('/add/user/me', (req, res) => {
    User.create({
        name: req.body.name,
        email: req.body.email,
        branch: req.body.branch,
        phoneno: req.body.phoneno,
        alt_phoneno: req.body.alt_phoneno,
        insta: req.body.insta,
        fb: req.body.fb,
        twitter: req.body.twitter,
        linkedin: req.body.linkedin,
        photo: req.body.photo
    },
    (err, user) => {
        if (err) {
            return res.send("There was a problem while adding this user to the database.")
            // return res.send(err)
        }
        res.send(user)
    })
})

// GET ALL USERS FROM DB
router.get('/', (req, res) => {
    User.find({}, (err, user) => {
        if (err) {
            return res.json(err)
        }
        res.send(user)
    })
})

// GET A PARTICULAR USER (using /:id)
router.get('/get/user/:id', (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err) {
            return res.send("There was a problem in finding this specific user.")
            // return res.send(err)
        }
        if (!user) {
            return res.send("No user found.")
        }
        res.send(user)
    })
})

// UPDATE A PARTICULAR USER IN THE DATABASE
router.put('/update/user/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, user) => {
        if (err) {
            return res.send("There was a problem in updating the user.")
            // return res.send(err)
        }
        res.send(user)
    })
})

// DELETE A PARTICULAR USER FROM THE DATABASE
router.delete('/del/user/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, user) => {
        if (err) {
            return res.send("There was a problem deleting the content.")
            // return res.send(err)
        }
        res.send("Details of user: '" + user.name + "' was deleted.")
    })
})

// SEARCH A PARTICULAR USER FROM THE DATABASE (CASE-SENSITIVE)
router.get("/search/:name", (req, res) => {
    var regex = new RegExp(req.params.name)
    User.find({ name: regex }).then((result) => {
        res.status(200).json(result)
    })
})

// SEARCH A PARTICULAR USER FROM THE DATABASE (CASE-INSENSITIVE)
router.get("/search/any/:name", (req, res) => {
    var regex = new RegExp(req.params.name, "i")
    User.find({ name: regex }).then((result) => {
        res.status(200).json(result)
    })
})

module.exports = router;