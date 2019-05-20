import User from "../src/User"

export default class Teacher extends User {
	constructor(fname, lname, age, didCompleteAPBC, teachingHours) {
		super(fname, lname, age)

		this.didCompleteAPBC = didCompleteAPBC
		this.teachingHours = teachingHours
		this.courses = []
	}
}

