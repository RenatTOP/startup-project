const   db = require('../models')
const Hero = db.hero


exports.addHero = (req, res) => {
    const { title_en, title_ru,
            title_min_en, title_min_ru, description_en, description_ru,
            points, ability1_en, ability1_ru,
            ab_desc1_en, ab_desc1_ru, ability2_en, ability2_ru,
            ab_desc2_en, ab_desc2_ru, ability3_en, ability3_ru,
            ab_desc3_en, ab_desc3_ru, heroic1_en, heroic1_ru,
            heroic_desc1_en, heroic_desc1_ru, heroic2_en, heroic2_ru,
            heroic_desc2_en, heroic_desc2_ru, ab_trait_en, ab_trait_ru,
            trait_desc_en, trait_desc_ru
    } = req.body
    const hero = new Hero({
        'title.en': title_en, 'title.ru': title_ru, 'title_min.en': title_min_en, 'title_min.ru': title_min_ru,
            'description.en': description_en, 'description.ru': description_ru, points,
            'ability1.en': ability1_en, 'ability1.ru': ability1_ru, 'ab_desc1.en': ab_desc1_en, 'ab_desc1.ru': ab_desc1_ru,
            'ability2.en': ability2_en, 'ability2.ru': ability2_ru, 'ab_desc2.en': ab_desc2_en, 'ab_desc2.ru': ab_desc2_ru,
            'ability3.en': ability3_en, 'ability3.ru': ability3_ru, 'ab_desc3.en': ab_desc3_en, 'ab_desc3.ru': ab_desc3_ru,
            'heroic1.en': heroic1_en, 'heroic1.ru': heroic1_ru, 'heroic_desc1.en': heroic_desc1_en, 'heroic_desc1.ru': heroic_desc1_ru,
            'heroic2.en': heroic2_en, 'heroic2.ru': heroic2_ru, 'heroic_desc2.en': heroic_desc2_en, 'heroic_desc2.ru':heroic_desc2_ru,
            'ab_trait.en': ab_trait_en, 'ab_trait.ru': ab_trait_ru, 'trait_desc.en': trait_desc_en, 'trait_desc.ru': trait_desc_ru
    })
    hero.save((err) => {
        if (err) {
            res.status(500).send({ servErr: err })
            return
        }
        res.send({ heroDone: "Hero was added successfully!" })
    })
}

exports.getHeroes = (req, res) => {
    const getlang = req.get('Accept-Language')
    let lang = getlang[0] + getlang[1]
    Hero.find({}, `title.${lang} title_min.${lang} type.${lang} points`, (err, heroes) => {
        if (err) {
          res.sendStatus(500)
        } else {
          res.send({ heroes: heroes })
        }
      }).sort({ title: 1 })
}

// /user/tobi for /user/:name
// req.param('name')
// => "tobi"