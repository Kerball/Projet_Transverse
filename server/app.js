const express = require('express')
const app = express()
const session = require('express-session')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const apiRouter = require('./routes/api.js')


app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(session({ secret: 'grehjznejzkhgjrez', saveUninitialized: false, resave: false }))
app.use(express.static(path.join(__dirname, '../client')))

app.use('/api/', apiRouter)

module.exports = app
