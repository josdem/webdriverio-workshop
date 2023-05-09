const { config } = require("../../wdio.conf")
const { join } = require('path')

config.services = config.services.concat(["chromedriver"])

config.services = config.services.concat([
  ['image-comparison',
  // The options
  {
      // Some options, see the docs for more
      baselineFolder: join(process.cwd(), './tests/sauceLabsBaseline/'),
      formatImageName: '{tag}-{logName}-{width}x{height}',
      screenshotPath: join(process.cwd(), '.tmp/'),
      savePerInstance: true,
      autoSaveBaseline: true,
      blockOutStatusBar: true,
      blockOutToolBar: true,
      // NOTE: When you are testing a hybrid app please use this setting
      isHybridApp: true,
      // Options for the tabbing image
      tabbableOptions:{
          circle:{
              size: 18,
              fontSize: 18,
              // ...
          },
          line:{
              color: '#ff221a', // hex-code or for example words like `red|black|green`
              width: 3,
          },
      }
      // ... more options
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
