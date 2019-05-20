export default class Course {
	constructor(name, numOfHours, date) {
        this.name = name
        this.numOfHours = numOfHours
        this.date = date
        this.votes = []
    }

    vote(teacher) {
        if(this.votes.includes(teacher)) {
            return false
        }
        this.votes.push(teacher)
        return true
    }
}
