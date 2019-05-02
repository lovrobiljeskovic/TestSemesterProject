const express = require("express")
const router = express.Router()

router.get("/", (req, res, next) => {
    res.send("Reached endpoint okay")
})

module.exports = router