import express from "express"
import signupValidate from "../src/signupValidate"
import User from "../src/User"
import { getVotableCourses } from "../src/votingSystem"
import CourseRepository from "../src/CourseRepository"

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
		req.session["teacher"] = verifiedUser.username
		res.send(true)
	} else {
		res.send(false)
	}
})

router.get("/vote", (req, res) => {
	if (!req.session.teacher) {
		return res.sendStatus(401)
	}
	res.send(getVotableCourses(new CourseRepository()))
})

export default router
