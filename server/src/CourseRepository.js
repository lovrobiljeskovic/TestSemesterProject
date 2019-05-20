export default class CourseRepository {

	constructor() {
		this.courses = []
	}

	get() {
		return this.courses
	}

	insert(course) {
		return this.courses.push(course) - 1
	}
}