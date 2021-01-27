const { verifyToken, isModerator } = require("../middlewares/authJwt")
const { moderatorBoard } = require("../controllers/user.controller")


module.exports = function(app) {
    app.get("/api/test/mod", verifyToken, isModerator, moderatorBoard)
}