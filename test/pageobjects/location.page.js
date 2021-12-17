class LocationPage {
  get locationButton() {
    return $("[id=btnMyLocation]")
  }

  async clickOnLocationButton() {
    const button = await this.locationButton
    await expect(button).toBeExisting()
    await button.click()
  }
}

module.exports = new LocationPage()
