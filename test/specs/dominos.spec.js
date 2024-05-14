const assert = require("assert")
const DominosPage = require("../pageobjects/dominos.page")

describe("Loading website", () => {
  before(async () => {
    await browser.enablePerformanceAudits()
    await DominosPage.open()
  })

  it("Getting performance score", async () => {
    const score = await browser.getPerformanceScore()
    await DominosPage.findStore()
    console.log("score: ", score)
    assert.ok(score > 0.5)
  })

  after(async () => {
    await browser.disablePerformanceAudits()
  })
})
