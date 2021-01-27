const    db = require("../models")
const ROLES = db.ROLES
const  User = db.user

exports.checkDuplicateEmailOrUsername = (req, res, next) => {
    const { email, username } = req.body
    User.findOne({ email: email })
        .exec((err, user) => {
            if (err) {
                res.status(500).send({ servErr: err })
                return
            }
            if (user) {
                res.status(400).send({ userErr: "Failed! Email is already in use!" })
                return
            }
            User.findOne({ username: username })
                .exec((err, user) => {
                    if (err) {
                        res.status(500).send({ servErr: err })
                        return
                    }
                    if (user) {
                        res.status(400).send({ userErr: "Failed! Username is already in use!" })
                        return
                    }
                next()
                })
        })
}

exports.checkRolesExisted = (req, res, next) => {
    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            if (!ROLES.includes(req.body.roles[i])) {
                res.status(400).send({
                    userErr: `Failed! Role ${req.body.roles[i]} does not exist!`
                })
                return
            }
        }
    }
    next()
}