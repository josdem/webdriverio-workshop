
const assert = require("assert")
const properties = require(`../properties/test.properties`)
const DominosPage = require("../pageobjects/dominos.page")

describe("intercepting search request", async () => {
  beforeEach(async () => {
    browser.enablePerformanceAudits()
  })

  it("opens home page", async () => {
    await DominosPage.open()
  })

  it("finds a store", async () => {
    await DominosPage.findStore()
    assert.strictEqual(await browser.getTitle(), "Find a Nearby Domino's");
    await browser.pause(properties.waitingTime)
  })

  afterEach(async () => {
    let score = await browser.getPerformanceScore()
    console.log("score: ", score)
    assert.ok(score >= properties.performanceScore, "Performance score is below the expected value")
    browser.disablePerformanceAudits()
  })
})
