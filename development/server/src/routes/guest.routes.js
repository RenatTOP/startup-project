const { verifyToken } = require("../middlewares/authJwt")
const { allAccess } = require("../controllers/user.controller")


module.exports = function(app) {
    app.get("/api/test/all", allAccess)
}