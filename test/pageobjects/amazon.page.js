const properties = require(`../properties/test.properties`)

class AmazonPage {
  get searchTextBox() {
    return $("[id=twotabsearchtextbox]")
  }

  async open() {
    await browser.url(properties.amazonUrl)
  }
}

module.exports = new AmazonPage()
