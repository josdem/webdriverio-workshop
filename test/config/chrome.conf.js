const { config } = require("../../wdio.conf")

config.services = config.services.concat(["chromedriver", "devtools"])

exports.config = config