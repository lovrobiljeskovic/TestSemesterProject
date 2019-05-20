export default function vote(course, teacher) {
    if(teacher.numOfHours < 20 ) {
        return false
    }
    return course.vote(teacher)
}