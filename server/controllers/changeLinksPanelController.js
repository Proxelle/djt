const LinksSchema = require('../models/changeLinksPanelModel')

module.exports = registartionUser = (req, res) => {    
    console.log(req.body.data)
    console.log(Array.isArray(req.body.data))
    let linksSchema = new LinksSchema(req.body.data);
     
    linksSchema.save()
}