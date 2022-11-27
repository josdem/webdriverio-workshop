const assert = require("assert")
const properties = require(`../properties/${process.env.NODE_ENV}.properties`)

describe("Loading website", () => {
  before(() => {
    browser.enablePerformanceAudits()
  })

  it("Getting Lighthouse score", async () => {
    await browser.url(properties.website)
    await browser.getPageWeight()
    let metrics = await browser.getMetrics()
    let score = await browser.getPerformanceScore()
    console.log("metrics:", metrics)
    console.log("score: ", score)
    assert.ok(score > 0.5)
  })

  after(() => {
    browser.disablePerformanceAudits()
  })
})
