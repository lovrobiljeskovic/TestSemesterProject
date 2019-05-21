import express from "express"
import signupValidate from "../src/signupValidate"
import User from "../src/User"
import Course from "../src/Course"
import votingSystem,{ getVotableCourses } from "../src/votingSystem"
import CourseRepository from "../src/CourseRepository"
import UserRepository from "../src/UserRepository"

const router = express.Router()
const userRepo = new UserRepository()
const courseRepo = new CourseRepository()
userRepo.insert(new User("testname", "testlname", "1990-01-01", "user", "pass"))
userRepo.insert(new User("testname", "testlname2", "1990-12-12", "MathiasJepsen", "1234"))
courseRepo.insert(new Course("test course", 20, "now"))

router.get("/signup", (req, res) => {
	const userJson = req.query
	const user = new User(userJson.firstname, userJson.lastname, userJson.birthday, userJson.username, userJson.password)
	let isValid = signupValidate(user)
	if (isValid) {
		userRepo.insert(user)
	}
	res.send(isValid)
})
//
router.get("/login", (req, res) => {
	const credentials = req.query

	let user = userRepo.getBy({username: credentials.username, password: credentials.password})
	if (user != null) {
		req.session["teacher"] = user
		res.send({user: user})
	} else {
		res.send(false)
	}
})

router.get("/vote", (req, res) => {
	if (!req.session.teacher) {
		return res.sendStatus(401)
	}
	res.send(getVotableCourses(courseRepo))
})

router.post("/vote", (req, res) => {
	if (!req.session.teacher) {
		return res.sendStatus(401)
	}
	if (!req.body.course) {
		res.send({error: "Course is required"})
		return res.sendStatus(422)
	}
	let course = courseRepo.getBy({name: req.body.course.name, date: req.body.course.date})
	if (!course) {
		return res.sendStatus(422)
	}
	res.sendStatus(votingSystem(course, req.session.teacher) ? 200 : 422)
})

export default router
