import Database from "./Database"
export default class UserRepository {

	constructor() {
		this.db = Database
		if (!this.db.users) {
			this.db.users = []
		}
	}

	get() {
		return this.db.users
	}

	getBy(matchers) {
		if (typeof matchers !== "object") {
			let idx = matchers
			return idx > 0 && idx < this.db.users.length ? this.db.users[idx] : null
		} else {
			let idx = this._findIdx(matchers)
			return idx === -1 ? null : this.db.users[idx]
		}
	}

	insert(user) {
		return this.db.users.push(user) - 1
	}


	_findIdx(matchers) {
		let keys = Object.keys(matchers)
		return this.db.users.findIndex(u => keys.every(key => u[key] == matchers[key]))
	}
}