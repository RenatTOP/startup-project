const { register, login, activate } = require('../controllers/auth.controller')
const { checkDuplicateEmailOrUsername, checkRolesExisted } = require("../middlewares/verifySignUp")


module.exports = function(app) {
    app.post("/api/auth/signup", [checkDuplicateEmailOrUsername, checkRolesExisted], register)

    app.post("/api/auth/login", login)

    app.get("/api/auth/email-activate/:token", activate)
}