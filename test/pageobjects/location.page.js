const properties = require(`../properties/test.properties`)

class LocationPage {
  get locationButton() {
    return $("[id=btnMyLocation]")
  }

  async clickOnLocationButton() {
    const button = await this.locationButton
    await expect(button).toBeExisting()
    await button.click()
  }

  async open() {
    await browser.url(properties.url)
  }
}

module.exports = new LocationPage()
