import Teacher from '../src/Teacher'
import Course from '../src/Course'
import votingSystem from '../src/votingSystem';



test("teacher with 20 hours or more who hasnt voted", () => {
    const newTeacher = new Teacher("P", "Pedersen", "35", true, 25)
    const newCourse = new Course("Yes", 21, Date.now)
    expect(votingSystem(newCourse, newTeacher)).toBe(true)
})

