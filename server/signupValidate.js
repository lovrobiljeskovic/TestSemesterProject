function signupValidate(fname, lname, age){
    const pattern = /^[a-z æøå]+$/
    return pattern.test(fname.toLowerCase()) && pattern.test(lname.toLowerCase()) && ageValidator(age)
}

function ageValidator(age){
    const year = new Date().getFullYear()
    const userYear = age.split("-")[0]
    const userAge = year-userYear
    
    return userAge >= 18  
}

module.exports = signupValidate