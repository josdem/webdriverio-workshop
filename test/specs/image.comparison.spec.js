describe('Example', () => {
    beforeEach(async () => {
      await browser.url('https://webdriver.io')
    })
  
    it("should save some screenshots", async () => {
      await browser.saveScreen('homePage', {})
    })
  
    it("should compare successful with a baseline", async () => {
      expect(await browser.checkScreen('homePage', {})).toEqual(0)
    })
  })