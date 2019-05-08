const expect = require("chai").expect

describe("Testing the Login component", () => {
    it("should fill in the input fields and hit submit", () => {
        browser.url("./")

        browser.setValue("#username", "MathiasJepsen")
        browser.setValue("#password", "1234")

        const usernameText = $("#username").getValue()
        const passwordText = $("#password").getValue()

        expect(usernameText).to.equal("MathiasJepsen")
        expect(passwordText).to.equal("1234")

        const submitButton = $("#submitButton")
        submitButton.click()    

        const messageBox = $("#messageBox")
        messageBox.waitForExist(1000)

        expect($("#messageBoxText").getText()).to.equal("Successfully logged in")

        browser.setValue("#username", "WrongUsername")
        browser.setValue("#password", "1234")

        submitButton.click()   
        
        expect($("#messageBoxText").getText()).to.equal("Failed to log in")
    })

    it("should switch to signup, fill in the fields and hit submit", () => {
        browser.url("./")

        const changeComponentButton = $("#changeComponentButton")
        changeComponentButton.click()

        browser.setValue("#username", "MathiasJepsen")
        browser.setValue("#password", "1234")
        browser.setValue("#firstname", "Mathias")
        browser.setValue("#lastname", "Jepsen")
        browser.setValue("#birthday", "27051993")

        const usernameText = $("#username").getValue()
        const passwordText = $("#password").getValue()
        const firstnameText = $("#firstname").getValue()
        const lastnameText = $("#lastname").getValue()
        const birthdayText = $("#birthday").getValue()

        expect(usernameText).to.equal("MathiasJepsen")
        expect(passwordText).to.equal("1234")
        expect(firstnameText).to.equal("Mathias")
        expect(lastnameText).to.equal("Jepsen")
        expect(birthdayText).to.equal("1993-05-27")

        const submitButton = $("#submitButton")
        submitButton.click()   
        
        const messageBox = $("#messageBox")
        messageBox.waitForExist(1000)

        expect($("#messageBoxText").getText()).to.equal("Successfully signed up")

        browser.setValue("#username", "MathiasJepsen")
        browser.setValue("#password", "1234")
        browser.setValue("#firstname", "M4th14s")
        browser.setValue("#lastname", "J3p53n")
        browser.setValue("#birthday", "27051993")

        submitButton.click()   

        expect($("#messageBoxText").getText()).to.equal("Failed to sign up")
    })
})