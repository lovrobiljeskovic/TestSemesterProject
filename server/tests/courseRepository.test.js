
import CourseRepository from "../src/CourseRepository"
import {reset} from "../src/Database";
import Course from "../src/Course"

let repo;

beforeEach(() => {
    repo = new CourseRepository();
})
afterEach(() => {
    reset();
});


test("inserts and returns all courses", () => {
    repo.insert(new Course())
    expect(repo.get()).toHaveLength(1);
});

test("returns can find course by name", () => {
    let course = new Course("This is what I'm looking for");
    repo.insert(course);
    repo.insert(new Course("This isn't what I'm looking for"))
    
    expect(repo.getBy({name: course.name})).toEqual(course);
});
