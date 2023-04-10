const properties = require(`../properties/test.properties`)

const HomePage = require("../pageobjects/home.page")

describe("consuming an RESTful API", () => {
  it("Getting categories from service", async () => {
    await HomePage.open()
    browser.setupInterceptor()
    browser.expectRequest("GET", "/", 200)
  })
})
