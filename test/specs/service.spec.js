const assert = require("assert")
const service = require("../services/smoothie")

describe("consuming an RESTful API", () => {
  it("Getting categories from service", async () => {
    let result = await service.getCategories()
    assert.strictEqual(result.length, 4, "Expecting four smoothie categories")
  })
})
