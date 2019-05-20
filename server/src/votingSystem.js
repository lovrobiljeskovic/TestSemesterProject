export default function vote(course, teacher) {
    if(teacher.teachingHours < 20 ) {
        return false
    }
    return course.vote(teacher)
}