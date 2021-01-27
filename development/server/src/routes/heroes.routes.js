const { verifyToken, isAdmin, isModerator } = require("../middlewares/authJwt")
const { adminBoard, moderatorBoard, userBoard, allAccess } = require("../controllers/user.controller")
const { addHero, getHeroes } = require("../controllers/hero.controller")


module.exports = function(app) {
    app.get("/api/test/admin", verifyToken, isAdmin, adminBoard)
    app.post("/api/admin-panel/add-hero", addHero)
    app.get('/api/heroes', getHeroes)
}