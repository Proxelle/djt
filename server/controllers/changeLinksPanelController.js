const LinksSchema = require('../models/changeLinksPanelModel')

module.exports = registartionUser = (req, res) => {
    let linksSchema = new LinksSchema({links: req.body.data});     
    linksSchema.save((err, product) => {
        if(err) {
            console.log(err)
            res.send()
        }
        else res.send('ok')
    })
}