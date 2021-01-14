const express = require('express')
const app = express()
const session = require('express-session')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const apiRouter = require('./routes/api.js')

var $ = require( "jquery" )


app.get('/Canaux', (req,res) => {

    res.sendFile(`${__dirname}/client/components/Canaux.vue`)

})

io.on('connection' , (socket) =>{
    console.log('Un utilisateur s\'est connecte') 
    socket.on('disconnect' , (msg) => {

        console.log('Un utilisateur s\'est deconnecte') 

}) 
 
    socket.on('chat message' , (msg) => {

        io.emit('chat messgae' , msg)

}) 
})


app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(session({ secret: 'grehjznejzkhgjrez', saveUninitialized: false, resave: false }))
app.use(express.static(path.join(__dirname, '../client')))

app.use('/api/', apiRouter)

module.exports = app
