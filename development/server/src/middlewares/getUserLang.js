exports.getUserLang = function (req, res) {
    const getlang = req.get('Accept-Language')
    let lang = getlang[0] + getlang[1]
    return lang
}