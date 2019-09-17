const express = require('express')
const bodyParser = require('body-parser')

const response = require('./networks/response')

const db = require('./db')

// const router = require('./components/messages/network')
const routes = require('./networks/routes')

db('mongodb+srv://erisk:camila13@cluster0-xmsn8.mongodb.net/test?retryWrites=true&w=majority')

var app = express()
app.use(bodyParser.json())//Para recibir json
app.use(bodyParser.urlencoded({extended:false}))//Para trabajar con el form
// app.use(router)
routes(app)

// app.use('/', function(res, res){
//     res.send('Hola mundo con node')
// })



app.use('/app', express.static('public'))

app.listen(3000)