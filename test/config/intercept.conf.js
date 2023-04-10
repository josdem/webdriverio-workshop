const { config } = require("../../wdio.conf")

config.services = config.services.concat(["chromedriver", "intercept"])

config.capabilities = [
  {
    maxInstances: 5,
    browserName: "chrome",
    acceptInsecureCerts: true,
  },
]

exports.config = config
