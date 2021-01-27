const    mongoose = require('mongoose')
const      Schema = mongoose.Schema
const UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true
    },
    roles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "role"
        }
    ],
    favoriteHeroes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "heroes"
        }
    ],
    favoriteBattlegrounds: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "battlegrounds"
        }
    ]
})
const UserModel = mongoose.model('users', UserSchema)

module.exports = UserModel