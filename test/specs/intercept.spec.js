const assert = require("assert")
const properties = require(`../properties/test.properties`)

const DominosPage = require("../pageobjects/dominos.page")

describe("intercepting search request", async () => {
  it("opens home page", async () => {
    await DominosPage.open()
    await browser.setupInterceptor()
  })

  it("finds a store", async () => {
    await DominosPage.findStore()
    await browser.pause(properties.waitingTime)
  })

  it("validate search request", async () => {
    const requests = await browser.getRequests()
    requests.forEach((request) => {
      console.log("Request: " + JSON.stringify(request))
    })
    assert.ok(requests.length > 1, "expecting more than one response")
  })
})
