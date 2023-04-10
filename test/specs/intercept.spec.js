const assert = require("assert")
const properties = require(`../properties/test.properties`)

const HomePage = require("../pageobjects/home.page")

describe("intercepting search request", async () => {
  it("opens home page", async () => {
    await browser.url("https://www.amazon.com/")
    await browser.setupInterceptor()
  })

  it("search pizza", async () => {
    await $("#twotabsearchtextbox").setValue("pizza")
    await browser.pause(3000)
  })

  it("validate search request", async () => {
    const requests = await browser.getRequests("GET", "https://completion.amazon.com/api/2017/suggestions")
    console.log("First request: " + JSON.stringify(requests[0]))
    assert.ok(requests.length > 1, "expecting more than one response")
  })
})
