import Teacher from '../src/Teacher'
import Course from '../src/Course'
import votingSystem from '../src/votingSystem';

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
});


