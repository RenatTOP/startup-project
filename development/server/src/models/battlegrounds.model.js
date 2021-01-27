const     mongoose = require('mongoose')
const mongooseI18n = require('mongoose-i18n-localize')
const       Schema = mongoose.Schema
const BattlegroundSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        i18n: true
    },
    description: {
        type: String,
        trim: true,
        required: true,
        i18n: true
    },
    title_min1: {
        type: Object,
        trim: true,
        required: true,
    },
    title_min2: {
        type: String,
        trim: true,
        required: true,
        i18n: true
    },
    title_min3: {
        type: String,
        trim: true,
        required: true,
        i18n: true
    },
    desc1: {
        type: String,
        trim: true,
        required: true,
        i18n: true
    },
    desc2: {
        type: String,
        trim: true,
        required: true,
        i18n: true
    },
    desc3: {
        type: String,
        trim: true,
        required: true,
        i18n: true
    }
})

BattlegroundSchema.plugin(mongooseI18n, {
    locales: ['en', 'ru']
})

const BattlegroundModel = mongoose.model('battlegrounds', BattlegroundSchema)

module.exports = BattlegroundModel