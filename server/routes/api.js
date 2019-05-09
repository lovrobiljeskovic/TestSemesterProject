import express from "express"
import signupValidate from "../src/signupValidate"
import User from "../src/User"
const router = express.Router()

router.get("/signup", (req, res) => {
	const userJson = req.query
	const user = new User(userJson.firstname, userJson.lastname, userJson.birthday)
	res.send(signupValidate(user))
})
//
router.get("/login", (req, res) => {
	const verifiedUser = { username: "MathiasJepsen", password: "1234" }
	const credentials = req.query

	if (verifiedUser.username === credentials.username && verifiedUser.password === credentials.password) {
		res.send(true)
	} else {
		res.send(false)
	}
})

export default router
