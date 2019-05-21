export default class User {
	constructor(fname, lname, age, username = '', password = '') {
		this.fname = fname
		this.lname = lname
		this.password = password
		this.username = username
		this.age = age
	}
}