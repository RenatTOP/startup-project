const     mongoose = require('mongoose')
const mongooseI18n = require('mongoose-i18n-localize')
const       Schema = mongoose.Schema
const HeroSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        i18n: true
    },
    title_min: {
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
    points: {
        type: Object,
        trim: true,
        required: true,
    },
    ability1: {
        type: String,
        trim: true,
        required: true,
        i18n: true
    },
    ab_desc1: {
        type: String,
        trim: true,
        required: true,
        i18n: true
    },
    ability2: {
        type: String,
        trim: true,
        required: true,
        i18n: true
    },
    ab_desc2: {
        type: String,
        trim: true,
        required: true,
        i18n: true
    },
    ability3: {
        type: String,
        trim: true,
        required: true,
        i18n: true
    },
    ab_desc3: {
        type: String,
        trim: true,
        required: true,
        i18n: true
    },
    heroic1: {
        type: String,
        trim: true,
        required: true,
        i18n: true
    },
    heroic_desc1: {
        type: String,
        trim: true,
        required: true,
        i18n: true
    },
    heroic2: {
        type: String,
        trim: true,
        required: true,
        i18n: true
    },
    heroic_desc2: {
        type: String,
        trim: true,
        required: true,
        i18n: true
    },
    ab_trait: {
        type: String,
        trim: true,
        required: true,
        i18n: true
    },
    trait_desc: {
        type: String,
        trim: true,
        required: true,
        i18n: true
    },

    type: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "heroType"
        }
    ]
})

HeroSchema.plugin(mongooseI18n, {
    locales: ['en', 'ru']
})

const HeroModel = mongoose.model('heroes', HeroSchema)

module.exports = HeroModel