const express = require('express')
const mongoose = require('mongoose')
const path = require('path');

//local imports
const routes = require('./routes/')
require('dotenv').config({ path: path.resolve(__dirname, './.env') });
// console.log(routes)

const app = express();
app.use(express.json());
const mongoDbString = process.env.DATABASE_URL

mongoose.connect(mongoDbString)
const database = mongoose.connection

app.use('/api', routes)


app.listen('5000', () => {
    console.log("Server Listening at port 5000");
})
database.on('error', (error) => {
    console.log(error)
})
database.once('connected', () => {
    console.log("DB CONNETED");
})