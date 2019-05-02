const signupValidate = require('.../src/signupValidate');
const User = require('.../src/User');

test("less than 18 years old", () => {
    const date = new Date()
    age = `${date.getFullYear()}-${date.getDate()}-${date.getMonth() + 1}`
    const user = new User("Mathias","Jepsen",age)
    expect(signupValidate(user)).toBe(false)
})

test("18 years old", () => {
    const date = new Date()
    age = `${date.getFullYear() - 18}-${date.getDate()}-${date.getMonth() + 1}`
    const user = new User("Mathias","Jepsen",age)
    expect(signupValidate(user)).toBe(true)
})

test("older than 18 years old", () => {
    const user = new User("Mathias","Jepsen","1993-27-05")
    expect(signupValidate(user)).toBe(true)
})

test("invalid characters used in first name", () => {
    const user = new User("M4th1a","Jepsen","1993-27-05")
    expect(signupValidate(user)).toBe(false)
})

test("invalid characters used in last name", () => {
    const user = new User("Mathias","J3p5en","1993-27-05")
    expect(signupValidate(user)).toBe(false)
})

test("invalid characters used in first and last name", () => {
    const user = new User("M4th1a","J3p5en","1993-27-05")
    expect(signupValidate(user)).toBe(false)
})

// test("adds 1 + 2 to equal 3", () => {
//     expect(sum(1, 2)).toBe(3);
// })
