const properties = require(`../properties/test.properties`)

class DominosPage {
  get carryOutTab() {
    return $("[data-quid=Carryout-input]")
  }

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
    await this.carryOutTab.waitForDisplayed()
    await this.carryOutTab.click()
    await this.zipCodeBox.waitForDisplayed()
    await this.zipCodeBox.clearValue()
    await this.zipCodeBox.setValue(properties.zipCode)
    await this.searchButton.waitForDisplayed()
    await this.searchButton.click()
  }
}

module.exports = new DominosPage()
