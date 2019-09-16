const express = require('express')
const bodyParser = require('body-parser')

const response = require('./networks/response')

// const router = require('./components/messages/network')
const routes = require('./networks/routes')

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