const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

// Middleware
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Routers
app.use('/api/users', require('./routes/userRoutes'))

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log('Server is On Fire...')
    mongoose.connect('mongodb://localhost:27017/mern-project', { useNewUrlParser: true }, () => {
        console.log('Database running')
    });
})