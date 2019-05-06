const User = require("../src/User")

class Teacher extends User {
    constructor(fname, lname, age, didCompleteAPBC) {
        super(fname, lname, age)

        this.didCompleteAPBC = this.didCompleteAPBC
        this.courses = []
    }
}

module.exports = Teacher