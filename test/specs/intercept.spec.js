const assert = require("assert")
const properties = require(`../properties/test.properties`)

const DominosPage = require("../pageobjects/dominos.page")

describe("intercepting search request", async () => {
  it("opens home page", async () => {
    await DominosPage.open()
    await browser.setupInterceptor()
  })

  it("search pizza", async () => {
    await DominosPage.findStore()
    assert.strictEqual(await browser.getTitle(), "Find a Nearby Domino's");
    await browser.pause(properties.waitingTime)
  })

  it("validate search request", async () => {
    const requests = await browser.getRequests()
    assert.ok(requests.length > 0, "expecting at least one response")
  })
})
