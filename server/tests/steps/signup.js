import { Given, When, Then } from "cucumber";
import signupValidate from "../../src/signupValidate";
import User from "../../src/User";
import assert from "assert";

let user;
let validationDidPass;

Given("the user is {int} years old", function(age) {
	const date = new Date();
	const userAge = `${date.getFullYear() - age}-${date.getDate()}-${date.getMonth() + 1}`;
	user = new User("Mathias", "Jepsen", userAge);
});

When("the user tries to sign up", function() {
	validationDidPass = signupValidate(user);
});

Then("the user {string} sign up", function(canSignUpString) {
	const canSignUp = canSignUpString === "can" ? true : false;
	assert.equal(validationDidPass, canSignUp);
});
