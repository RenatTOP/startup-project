const     mongoose = require("mongoose")
const mongooseI18n = require('mongoose-i18n-localize')
const       Schema = mongoose.Schema

const HeroTypeSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        i18n: true
    }
    })

HeroTypeSchema.plugin(mongooseI18n, {
    locales: ['en', 'ru']
})

const HeroTypeModel = mongoose.model('heroType', HeroTypeSchema)

module.exports = HeroTypeModel