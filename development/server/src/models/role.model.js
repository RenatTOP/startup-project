const mongoose = require("mongoose")
const   Schema = mongoose.Schema

const RoleSchema = new Schema({
        name: String
    })

const RoleModel = mongoose.model('role', RoleSchema)

module.exports = RoleModel