import User from "../src/User";

class Teacher extends User {
	// eslint-disable-next-line no-unused-vars
	constructor(fname, lname, age, didCompleteAPBC) {
		super(fname, lname, age);

		this.didCompleteAPBC = this.didCompleteAPBC;
		this.courses = [];
	}
}

export default Teacher;
