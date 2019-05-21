const expect = require("chai").expect

describe("Testing the Vote component", () => {
    it.only("navigate to voting page and see empty course list", () => {
        browser.url("/vote")

        let list = browser.$(".course-list")

        expect(list.type).to.not.equal('NoSuchElement');
        expect(browser.$(".course-list > li").type).to.equal("NoSuchElement")
    })

})