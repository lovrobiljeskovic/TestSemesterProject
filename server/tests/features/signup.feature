Feature: Signup
	Scenario: Younger than 18 years old
		Given the user is 16 years old
		When the user tries to sign up
		Then the user "cannot" sign up
	
	Scenario: Older than 18 years old
		Given the user is 20 years old
		When the user tries to sign up
		Then the user "can" sign up

	Scenario: 18 years old
		Given the user is 18 years old
		When the user tries to sign up
		Then the user "can" sign up