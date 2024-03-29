const { config } = require("../../wdio.conf")

config.services = config.services.concat(["chromedriver", "devtools"])

config.capabilities = [
  {
    maxInstances: 5,
    browserName: "chrome",
    acceptInsecureCerts: true,
  },
]

exports.config = config
