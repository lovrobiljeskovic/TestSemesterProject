export default function validate(user){
	const pattern = /^[a-z æøå]+$/
	return pattern.test(user.fname.toLowerCase()) && pattern.test(user.lname.toLowerCase())
		&& ageValidator(user.age)
		&& pattern.test(user.username.toLowerCase())
		&& Boolean(user.password)
}

function ageValidator(age){
	const year = new Date().getFullYear()
	const userYear = age.split("-")[0]
	const userAge = year-userYear

	return userAge >=18
}