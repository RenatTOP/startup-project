const { verifyToken, isAdmin, isModerator } = require("../middlewares/authJwt")
const { adminBoard, moderatorBoard, userBoard, allAccess } = require("../controllers/user.controller")
const { addHero, getHeroes, getHero, changeHero, deleteHero } = require("../controllers/hero.controller")


module.exports = function(app) {
    app.get("/api/test/admin", verifyToken, isAdmin, adminBoard)
    app.get("/api/heroes/:title", getHero)
    app.get('/api/heroes', getHeroes)
    app.put("/api/admin-panel/heroes/change-hero", verifyToken, isAdmin, isModerator, changeHero)
    app.delete("/api/admin-panel/heroes/delete-hero", verifyToken, isAdmin, deleteHero)
    app.post("/api/admin-panel/heroes/add-hero", verifyToken, isAdmin, addHero)
}