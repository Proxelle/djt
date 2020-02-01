const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
const cors = require('cors');
const bodyParser = require('body-parser')
const routes = require('./routes/index')  
require('dotenv').config()

const app = express()

app.use(cors());
app.options('*', cors());

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(routes)

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
