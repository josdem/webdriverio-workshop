const properties = require(`../properties/test.properties`)

class HomePage {
  async open() {
    await browser.url(properties.dominosUrl)
  }
}

module.exports = new HomePage()
