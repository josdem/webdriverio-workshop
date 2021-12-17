const properties = require(`../properties/test.properties`)
const LocationPage = require("../pageobjects/location.page")

describe("Checking locations", () => {
  it("goes from Ann Arbor to Guadalajara to Amsterdam", async () => {
    await LocationPage.open()
    await browser.cdp("Emulation", "setGeolocationOverride", {
      latitude: 42.3173603,
      longitude: -83.6826172,
      accuracy: 1,
    })
    await LocationPage.clickOnLocationButton()
    await browser.pause(properties.waitingTime)
    await browser.cdp("Emulation", "setGeolocationOverride", {
      latitude: 20.6743943,
      longitude: -103.3874128,
      accuracy: 1,
    })
    await LocationPage.clickOnLocationButton()
    await browser.pause(properties.waitingTime)
    await browser.cdp("Emulation", "setGeolocationOverride", {
      latitude: 52.369357,
      longitude: 4.9012204,
      accuracy: 1,
    })
    await LocationPage.clickOnLocationButton()
    await browser.pause(properties.waitingTime)
  })
})
