const properties = require(`../properties/test.properties`)
const LocationPage = require("../pageobjects/location.page")

describe("Checking locations", () => {
  it("goes from Ann Arbor to Guadalajara to Amsterdam", async () => {
    await LocationPage.open()
    await browser.cdp("Emulation", "setGeolocationOverride", {
      latitude: properties.UNITED_STATES.latitude,
      longitude: properties.UNITED_STATES.longitude,
      accuracy: properties.accuracy,
    })

    await LocationPage.clickOnLocationButton()
    await browser.pause(properties.waitingTime)
    await browser.cdp("Emulation", "setGeolocationOverride", {
      latitude: properties.MEXICO.latitude,
      longitude: properties.MEXICO.longitude,
      accuracy: properties.accuracy,
    })

    await LocationPage.clickOnLocationButton()
    await browser.pause(properties.waitingTime)
    await browser.cdp("Emulation", "setGeolocationOverride", {
      latitude: properties.NETHERLANDS.latitude,
      longitude: properties.NETHERLANDS.longitude,
      accuracy: properties.accuracy,
    })
    await LocationPage.clickOnLocationButton()
    await browser.pause(properties.waitingTime)
  })
})
