const properties = require(`../properties/test.properties`)

const HomePage = require("../pageobjects/home.page")

describe("intercepting search request", () => {
  it("sends zip code, city and state", async () => {
    await HomePage.open()
    browser.setupInterceptor()
    browser.expectRequest("GET", "/", 200)
  })
})
