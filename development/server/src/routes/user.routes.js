const { verifyToken } = require("../middlewares/authJwt")
const { userBoard } = require("../controllers/user.controller")


module.exports = function(app) {
    app.get("/api/test/user", verifyToken, userBoard)
}