const assert = require('assert')

describe('Loading webpage', () => {

   it('validates website title', async() => {
       await browser.url('https://josdem.io/')
       const title = await browser.getTitle()
       assert.strictEqual(title, "josdem")
   })

})