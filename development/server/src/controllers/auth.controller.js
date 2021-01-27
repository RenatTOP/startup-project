require('dotenv').config()
const    path = require('path') 
const  bcrypt = require('bcrypt')
const mailgun = require("mailgun-js")
const     jwt = require('jsonwebtoken')
const      db = require('../models')
const      mg = mailgun({apiKey: process.env.MG_API_KEY, domain: process.env.MG_DOMAIN})

const User = db.user
const Role = db.role


exports.register = (req, res) => {
    const { username, password, email } = req.body
    let token = jwt.sign({ username, password, email },
        process.env.JWT_SECRET, {expiresIn: '15m'})
    const data = {
        from: 'noreply@renattop.com',
        to: email,
        subject: 'Hello',
        html: 
            `
                <h2>Hello epta, activiruy account na</h2>
                <p>Copy this token</p>
                <p>${token}</p>
                <p><a href="${process.env.CLIENT_URL}/auth/email-activate/${token}">Activiruy ept</a></p>
            `
    }
    mg.messages().send(data, function (err, body) {
        if (err) {
            res.status(500).send({servErr: err.message})
            return
    }
        return res.send({message: 'Email have been sent ept, chekau na'})
    })
    
}
exports.activate = function (req, res) {
    const token = req.param('token')
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, function (err, decodedToken) {
            if (err) return res.send({servErr: 'Invalid link or you'})
            const {username, password, email} = decodedToken
            const user = new User({username, password: bcrypt.hashSync(password, 10), email})
            user.save((err) => {
                if (err) {
                    res.status(500).send({ servErr: err })
                    return
                }
                else {
                Role.findOne({ name: "user" }, (err, role) => {
                    if (err) {
                        res.status(500).send({ servErr: err })
                        return
                    }
                    user.roles = [role._id]
                    user.save(err => {
                        if (err) {
                            res.status(500).send({ servErr: err })
                            return
                        }
                    res.redirect(CLIENT_URL + '/auth/login')
                    res.send({ userDone: "User was registered successfully!" })
                    })
                })
                }
        })
        })
    } else {
        return res.send({errServ: 'Error ept'})
    }
}


exports.login = (req, res) => {
    const { email, password } = req.body
    User.findOne({ email: email })
        .populate("roles", "-__v")
        .exec((err, user) => {
            if (err) {
                res.status(500).send({ servErr: err })
                return
            }
            if (!user) {
                return res.status(404).send({ userErr: "User Not found." })
            }
            var passwordIsValid = bcrypt.compareSync(
                password,
                user.password
            )
            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    userErr: "Invalid Password!"
                })
            }
            var token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
                expiresIn: 86400
            })
            var authorities = []
            for (let i = 0; i < user.roles.length; i++) {
                authorities.push("ROLE_" + user.roles[i].name.toUpperCase())
            }
            res.status(200).send({
                id: user._id,
                username: user.username,
                email: user.email,
                roles: authorities,
                accessToken: token
            })
        })
}

// if (roles) {
//     Role.find(
//         { name: { $in: roles } },
//         (err, roles) => {
//             if (err) {
//                 res.status(500).send({ servErr: err })
//                 return
//             }
//             user.roles = roles.map(role => role._id)
//             user.save(err => {
//             if (err) {
//                 res.status(500).send({ servErr: err })
//                 return
//             }
//             res.send({ userDone: "User was registered successfully!" })
//             })
//         }
//     )