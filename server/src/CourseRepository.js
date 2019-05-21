import Database from './Database'
export default class CourseRepository {

	constructor() {
		this.db = Database;
		if (!this.db.courses) {
			this.db.courses = [];
		}
		
	}

	get() {
		return this.db.courses
	}

	getBy(matchers) {
        if (typeof matchers !== "object") {
            let idx = matchers;
            return idx > 0 && idx < this.db.courses.length ? this.db.courses[idx] : null;
        } else {
            let idx = this._findIdx(matchers);
            return idx === -1 ? null : this.db.courses[idx];
        }
    }

	insert(course) {
		return this.db.courses.push(course) - 1
	}

	_findIdx(matchers) {
        let keys = Object.keys(matchers)
        return this.db.courses.findIndex(u => keys.every(key => u[key] == matchers[key]))
	}
	
	clear() {
		this.db.courses = [];
	}
}