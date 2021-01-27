const  jwt = require("jsonwebtoken")
const   db = require("../models")
const User = db.user
const Role = db.role

require('dotenv').config()

exports.verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"]
    if (!token) {
        return res.status(403).send({ userErr: "No token provided!" })
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send({ userErr: "Unauthorized!" })
        }
        req.userId = decoded.id
        next()
    })
}

exports.isAdmin = (req, res, next) => {
    User.findById(req.userId)
        .exec((err, user) => {
            if (err) {
                res.status(500).send({ servErr: err })
                return
            }
            Role.find(
                { _id: { $in: user.roles } },
                (err, roles) => {
                    if (err) {
                        res.status(500).send({ servErr: err })
                        return
                    }
                    for (let i = 0; i < roles.length; i++) {
                        if (roles[i].name === "admin") {
                            next()
                            return
                        }
                    }
                    res.status(403).send({ userErr: "Require Admin Role!" })
                    return
                }
            )
    })
}

exports.isModerator = (req, res, next) => {
    User.findById(req.userId)
        .exec((err, user) => {
            if (err) {
                res.status(500).send({ message: err })
                return
            }
            Role.find(
                { _id: { $in: user.roles } },
                (err, roles) => {
                    if (err) {
                        res.status(500).send({ servErr: err })
                        return
                    }
                    for (let i = 0; i < roles.length; i++) {
                        if (roles[i].name === "moderator") {
                            next()
                            return
                        }
                    }
                    res.status(403).send({ userErr: "Require Moderator Role!" })
                    return
                }
            )
    })
}