const User = require('.../src/User');

function validate(User){
    const pattern = /^[a-z æøå]+$/
    return pattern.test(User.fname.toLowerCase()) && pattern.test(User.lname.toLowerCase()) 
    && ageValidator(User.age);
}

function ageValidator(age){
    const year = new Date().getFullYear();
    const userYear = age.split("-")[0];
    const userAge = year-userYear;
    
    return userAge >=18  
}
module.exports = validate;