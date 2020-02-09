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

console.log('DB_URL', process.env.DB_URL)

async function start () {
    try {
        await mongoose.connect('mongodb+srv://admin:123@cluster0-5t4ek.mongodb.net/test?retryWrites=true&w=majority', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            // useFindAndModify: true
        })
        app.listen(3000, () => {
            console.log('Server started...')
        })
    } catch (e) {
        console.log(e)
    } 
}

start()
