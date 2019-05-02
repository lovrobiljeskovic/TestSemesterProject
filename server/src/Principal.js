const User = require("../src/User")

class Principal extends User {
    constructor(fname, lname, age) {
        super(fname, lname, age)
    }


    hireTeacher(teacherRegistry, teacher) {
        const pattern = /^[a-z æøå]+$/
        if (pattern.test(teacher.fname.toLowerCase()) && pattern.test(teacher.lname.toLowerCase())) {
            teacherRegistry.push(teacher)
            return true
        } 
        return false
    }
}

module.exports = Principal