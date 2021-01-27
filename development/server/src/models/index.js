const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const db = {}

db.mongoose = mongoose

db.user = require("./user.model")
db.role = require("./role.model")
db.hero = require("./hero.model")
db.heroType = require("./heroType.model")
db.battleground = require("./battlegrounds.model")

db.ROLES = ["user", "admin", "moderator"]

module.exports = db