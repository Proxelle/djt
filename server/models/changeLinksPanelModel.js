let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let LinksSchema = new Schema({
    links: [
        { 
            name: String,
            link: String 
        }
    ]

});

module.exports = mongoose.model('LinksSchema', LinksSchema);