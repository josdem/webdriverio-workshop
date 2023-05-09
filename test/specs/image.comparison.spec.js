const properties = require(`../properties/test.properties`)

describe("Doing image comparison", () => {
  beforeEach(async () => {
    await browser.url(properties.webdriverIoUrl)
  })

  it("should save some screenshots", async () => {
    await browser.saveScreen("homePage", {})
  })

  it("should compare successful with a baseline", async () => {
    expect(await browser.checkScreen("homePage", {})).toEqual(0)
  })
})
