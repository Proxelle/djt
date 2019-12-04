const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
const securityData = require('./securityData.js')

const app = express()

async function start () {
    try {
        await mongoose.connect(securityData.baseUrl, {
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
