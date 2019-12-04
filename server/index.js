const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
const cors = require('cors');
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()

app.use(cors());
app.options('*', cors());

const urlencodedParser = bodyParser.urlencoded({ extended: false })

async function start () {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useFindAndModify: false
        })
        app.listen(PORT, () => {
            console.log('Server started...')
        })
    } catch (e) {
        console.log(e)
    } 
}

start()

app.post('/registration', urlencodedParser, (req, res) => {
    res.send('ok')
    console.log('/////////');
    console.log(req.body);
}) 
