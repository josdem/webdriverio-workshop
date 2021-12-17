const assert = require("assert")
const utils = require("../utils/geolocation.util")

describe("Checking locations", () => {
  it("validate I am in Michigan", async () => {
    await browser.url("https://www.where-am-i.net/")
    await utils.geolocation()
    await browser.cdp("Emulation", "setGeolocationOverride", {
      latitude: 42.3173603,
      longitude: -83.6826172,
      accuracy: 1,
    })
  })
})
