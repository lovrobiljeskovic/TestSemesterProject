
import UserRepository from "../src/UserRepository"
import {reset} from "../src/Database";
import User from "../src/User"

let repo;

beforeEach(() => {
    repo = new UserRepository();
})
afterEach(() => {
    reset();
});


test("inserts and returns all users", () => {
    repo.insert(new User())
    expect(repo.get()).toHaveLength(1);
});

test("can find user by name", () => {
    let user = new User('', '', 5, "mr.user");
    repo.insert(user);
    repo.insert(new User('', '', 5, 'mr.otherguy'))
    
    expect(repo.getBy({username: user.username})).toEqual(user);
});
