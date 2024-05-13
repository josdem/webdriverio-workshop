const properties = require(`../properties/test.properties`)

class DominosPage {
  get zipCodeBox() {
    return $("[data-quid=PostalCode]")
  }

  get searchButton() {
    return $('[type="submit"]')
  }

  async open() {
    await browser.url(properties.dominosUrl)
  }

  async findStore() {
    await this.zipCodeBox.waitForDisplayed()
    await zipCodeBox.clearValue()
    await zipCodeBox.setValue(properties.zipCode)
    await expect(searchButton).toBeExisting()
    await searchButton.click()
  }
}

module.exports = new DominosPage()
