const properties = require(`../properties/test.properties`)

const HomePage = require("../pageobjects/home.page")

describe("intercepting search request", () => {
  it("opens home page", async () => {
    await HomePage.open()
    await browser.url(properties.dominosUrl)
    await browser.setupInterceptor()
  })

  it("sends zip code, city and state", async () => {
    await HomePage.selectZipCodeCityAndState()
  })

  it("validate search request", async () => {
    await browser.expectRequest("POST", "/search", 200)
    await HomePage.clickOnSearchLocation()
    await browser.pause(2000)
    await browser.assertRequests()
  })
})
