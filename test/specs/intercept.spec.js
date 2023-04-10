const properties = require(`../properties/test.properties`)

describe("consuming an RESTful API", () => {
  it("Getting categories from service", async () => {
    const url = properties.dominosUrl
    browser.url(url)
    browser.setupInterceptor()
    browser.expectRequest("GET", "/", 200)
  })
})
