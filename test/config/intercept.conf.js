const { config } = require("../../wdio.conf")

config.services = config.services.concat(["intercept"])

config.capabilities = [
  {
    browserName: "chrome",
    "goog:chromeOptions": {
      args: ["headless", "disable-gpu"],
    },
  },
]

exports.config = config
