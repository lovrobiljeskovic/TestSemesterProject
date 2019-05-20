export default function vote(course, teacher) {
	if(teacher.teachingHours < 20 ) {
		return false
	}
	return course.vote(teacher)
}

export function getVotableCourses(voteRepository) {
	let courses = voteRepository.get()
    
	return courses.filter(course => course.numOfHours >= 20)
}