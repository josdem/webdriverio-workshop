const assert = require("assert")
const properties = require(`../properties/test.properties`)

const AmazonPage = require("../pageobjects/amazon.page")

describe("intercepting search request", async () => {
  it("opens home page", async () => {
    await AmazonPage.open()
    await browser.setupInterceptor()
  })

  it("search pizza", async () => {
    const searchBox = await AmazonPage.searchTextBox
    await searchBox.setValue(properties.searchValue)
    await browser.pause(properties.waitingTime)
  })

  it("validate search request", async () => {
    const requests = await browser.getRequests("GET", properties.amazonSuggestionsUrl)
    console.log("First request: " + JSON.stringify(requests[0]))
    assert.ok(requests.length > 1, "expecting more than one response")
  })
})
