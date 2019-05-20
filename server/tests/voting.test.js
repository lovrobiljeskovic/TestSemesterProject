/* eslint-disable no-undef */
import Teacher from "../src/Teacher"
import Course from "../src/Course"
import votingSystem, { getVotableCourses } from "../src/votingSystem"
import CourseRepository from "../src/CourseRepository"

const conditions = [
	{name: "Peter", voted: false, numOfTeachingHours: 19, result: false },
	{name: "John", voted: true, numOfTeachingHours: 19, result: false},
	{name: "Jack", voted: true, numOfTeachingHours: 25, result: false},
	{name: "Bruh", voted: false, numOfTeachingHours: 30, result: true},
]

conditions.forEach(condition => {

	test(`teacher with ${condition.numOfTeachingHours} teaching hours whose voted paramter is ${condition.voted}`, () => {
		const newTeacher = new Teacher(condition.name, "Pedersen", "35", true, condition.numOfTeachingHours)
		const newCourse = new Course("Yes", 21, Date.now)
		if(condition.voted) {
			newCourse.votes.push(newTeacher)
		}
		expect(votingSystem(newCourse, newTeacher)).toBe(condition.result)
	})
})

beforeEach(() => {
	CourseRepository.mockClear()
})


const mockGet = jest.fn()
jest.mock("../src/CourseRepository", () => {
	return jest.fn().mockImplementation(() => {
		return {get:  mockGet}
	})
})

// This test asserts verifications
test("votingManager calls voteRepo.get", () => {
	mockGet.mockImplementation(() => [])
	getVotableCourses(new CourseRepository())
	expect(mockGet).toHaveBeenCalledTimes(1)
})

// This test assserts state
test("votingManager filters out courses under 20 hours", () => {
	mockGet.mockImplementation(() => [
		new Course("bad course", 0, "tomorrow"),
		new Course("good course", 20, "yesterday"),
	])
	let courses = getVotableCourses(new CourseRepository())
	expect(courses).toHaveLength(1)
	expect(courses[0].name).toEqual("good course")
})