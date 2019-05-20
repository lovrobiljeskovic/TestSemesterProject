export default class Course {
	constructor(name, numOfHours, date) {
        this.name = name
        this.numOfHours = numOfHours
        this.date = date
        this.votes = []
    }

    vote(teacher) {
        if(this.votes.find(t => t.fname === teacher.fname)) {
            return false
        }
        this.votes.push(teacher)
        return true
    }
}
