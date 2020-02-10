let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let LinksSchema = new Schema({
    links: Array
});

module.exports = mongoose.model('Links', LinksSchema);