const { config } = require("../../wdio.conf")

config.capabilities = [
  {
    browserName: "chrome",
    "goog:chromeOptions": {
      args: ["headless", "disable-gpu"],
    },
  },
]

exports.config = config
