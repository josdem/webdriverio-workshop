const { config } = require("../../wdio.conf")

config.services = config.services.concat(["chromedriver"])

config.capabilities = [
  {
    browserName: "chrome",
    "goog:chromeOptions": {
      args: ["headless", "disable-gpu"],
    },
  },
]

exports.config = config
