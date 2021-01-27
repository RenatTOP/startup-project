require('dotenv').config()
const       path = require('path')
const       cors = require('cors')
const     morgan = require('morgan')
const    express = require('express')
const        app = express()
const         db = require("./models")
const   mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { AuthHeader } = require('./middlewares/auth.header')
// const { i18nMongo } = require('i18n-mongo')
// const    history = require('connect-history-api-fallback')


const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', '*')
    res.header('Access-Control-Allow-Headers', '*')
    next()
}


app.use(cors())
// app.use(i18nMongo())
// app.use(history())
app.use(AuthHeader)
app.use(allowCrossDomain)
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
require('./routes/auth.routes')(app)
require('./routes/guest.routes')(app)
require('./routes/user.routes')(app)
require('./routes/moderator.routes')(app)
require('./routes/heroes.routes')(app)
// app.use(serveStatic(__dirname + '/dist'))
// app.use(express.static(__dirname + '/dist'))


const Role = db.role
const HeroType = db.heroType

db.mongoose
    .connect(process.env.DBURL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log("Successfully connect to MongoDB.")
        initial()
    })
    .catch(err => {
        console.error("Connection error", err)
        process.exit()
    })

function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: "user"
            }).save(err => {
                if (err) {
                    console.log("error", err)
                }
            
                console.log("added 'user' to roles collection")
            })
            new Role({
                name: "moderator"
            }).save(err => {
                if (err) {
                console.log("error", err)
                }
                console.log("added 'moderator' to roles collection")
            })
            new Role({
                name: "admin"
            }).save(err => {
                if (err) {
                    console.log("error", err)
                }
                console.log("added 'admin' to roles collection")
            })
        }
    })
    HeroType.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new HeroType({
                'name.en': "Tank",
                'name.ru': "Танк"
            }).save(err => {
                if (err) {
                    console.log("error", err)
                }
            
                console.log("added 'Tank' to roles collection")
            })
            new HeroType({
                'name.en': "Bruiser",
                'name.ru': "Рубака"
            }).save(err => {
                if (err) {
                console.log("error", err)
                }
                console.log("added 'Bruiser' to roles collection")
            })
            new HeroType({
                'name.en': "Melee assassin",
                'name.ru': "Убийца ближнего боя"
            }).save(err => {
                if (err) {
                    console.log("error", err)
                }
                console.log("added 'Melee assassin' to roles collection")
            })
            new HeroType({
                'name.en': "Ranged assassin",
                'name.ru': "Убийца дальнего боя"
            }).save(err => {
                if (err) {
                    console.log("error", err)
                }
                console.log("added 'Ranged assassin' to roles collection")
            })
            new HeroType({
                'name.en': "Healer",
                'name.ru': "Лекарь"
            }).save(err => {
                if (err) {
                    console.log("error", err)
                }
                console.log("added 'Healer' to roles collection")
            })
            new HeroType({
                'name.en': "Support",
                'name.ru': "Поддержка"
            }).save(err => {
                if (err) {
                    console.log("error", err)
                }
                console.log("added 'Support' to roles collection")
            })
        }
    })
}


mongoose.connect(process.env.DBURL, { useUnifiedTopology: true, useNewUrlParser: true })

mongoose.connection
    .once('open', () => {
        console.log(`Mongoose - successful connection ...`)
            app.listen(process.env.PORT || process.env.PORT,
                () => console.log(`Server start on port ${process.env.PORT} ...`))
    })
    .on('error', error => console.warn(error))





