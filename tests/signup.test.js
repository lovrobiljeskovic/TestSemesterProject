const signupValidate = require('../src/signupValidate');

test("less than 18 years old", () => {
    const date = new Date()
    expect(signupValidate("Mathias", "Jepsen", `${date.getFullYear()}-${date.getDate()}-${date.getMonth() + 1}`)).toBe(false)
})

test("18 years old", () => {
    const date = new Date()
    expect(signupValidate("Mathias", "Jepsen", `${date.getFullYear() - 18}-${date.getDate()}-${date.getMonth() + 1}`)).toBe(true)
})

test("older than 18 years old", () => {
    expect(signupValidate("Mathias", "Jepsen", "1993-27-05")).toBe(true)
})

test("invalid characters used in first name", () => {
    expect(signupValidate("M4th1a$", "Jepsen", "1993-27-05")).toBe(false)
})

test("invalid characters used in last name", () => {
    expect(signupValidate("Mathias", "J3p5en", "1993-27-05")).toBe(false)
})

// test("adds 1 + 2 to equal 3", () => {
//     expect(sum(1, 2)).toBe(3);
// })