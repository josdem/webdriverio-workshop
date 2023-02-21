const assert = require("assert")
const service = require("../services/smoothie")

describe("consuming an RESTful API", () => {
  it("Getting categories from service", async () => {
    console.log("Hello World!")
    await service.getCategories()
    assert.ok(1 === 1)
  })
})
