/* eslint-disable no-undef */
import Teacher from "../src/Teacher";
import Principal from "../src/Principal";

const teacherRegistry = [
	new Teacher("Bodil", "Larsen", 53, true)
];

test("adds Teacher to the teacher registry", () => {
	const principal = new Principal("Mathias", "Jepsen", new Date());
	expect(principal.hireTeacher(teacherRegistry, new Teacher("Lovro", "Biljeskovic", 10, false))).toBe(true);
});

test("fails to add Teacher to the teacher registry without a first name", () => {
	const principal = new Principal("Mathias", "Jepsen", new Date());
	expect(principal.hireTeacher(teacherRegistry, new Teacher("", "Biljeskovic", 10, false))).toBe(false);
});

test("fails to add Teacher to the teacher registry without a first name", () => {
	const principal = new Principal("Mathias", "Jepsen", new Date());
	expect(principal.hireTeacher(teacherRegistry, new Teacher("Lovro", "", 10, false))).toBe(false);
});
