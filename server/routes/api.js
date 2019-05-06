const express = require("express")
const router = express.Router()
const signupValidate = require("../src/signupValidate")
const User = require("../src/User")

router.get("/signup", (req, res, next) => {
    const userJson = req.query
    const user = new User(userJson.firstname, userJson.lastname, userJson.birthday)
    res.send(signupValidate(user))
})

router.get("/login", (req, res, next) => {
    const verifiedUser = { username: "MathiasJepsen", password: "1234" }
    const credentials = req.query

    if (verifiedUser.username === credentials.username && verifiedUser.password === credentials.password) {
        res.send(true)
    } else {
        res.send(false)
    }
})

module.exports = router