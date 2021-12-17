const LocationPage = require("../pageobjects/location.page")

describe("Checking locations", () => {
  it("validate I am in Michigan", async () => {
    await browser.url("https://www.where-am-i.net/")
    await browser.cdp("Emulation", "setGeolocationOverride", {
      latitude: 42.3173603,
      longitude: -83.6826172,
      accuracy: 1,
    })
    await LocationPage.clickOnLocationButton()
    await browser.pause(3000)
    await browser.cdp("Emulation", "setGeolocationOverride", {
      latitude: 20.6743943,
      longitude: -103.3874128,
      accuracy: 1,
    })
    await LocationPage.clickOnLocationButton()
    await browser.pause(3000)
  })
})
