const { config } = require("../../wdio.conf")
const { join } = require('path')

config.services = config.services.concat(["chromedriver"])

config.services = config.services.concat([
  ['image-comparison',{
      baselineFolder: join(process.cwd(), './baselineImages'),
      formatImageName: '{tag}-{logName}',
      screenshotPath: join(process.cwd(), './actualImages'),
      savePerInstance: true,
      autoSaveBaseline: true,
      blockOutStatusBar: true,
      blockOutToolBar: true
  }],
],)

config.capabilities = [
  {
    maxInstances: 5,
    browserName: "chrome",
    acceptInsecureCerts: true,
  },
]

exports.config = config
