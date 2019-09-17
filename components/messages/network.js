const express = require('express')
const response = require('../../networks/response')
const controller = require('./controller')
const router = express.Router()


router.get('/', function(req, res) {
    const filterMessages = req.query.user || null
    controller.getMessage(filterMessages)
    .then((messageList) => {
        response.success(req, res, messageList, 200)
    })
    .catch(e => {
        response.error(req, res, 'Unexpected Error', 500, e)
    })
    // console.log(req.headers)
    // res.header({
    //     "custom-header": "Este es mi header"
    // })//Forma de enviar cabeceras al cliente
    // // res.send('Lista de mensajes')//respuesta plana
    // // res.status(201).send([{error:'', message: 'Creado correctamente'}])//Respuesta con cambio de estado
    // response.success(req,res,'Creado correctamente', 201)
})

router.post('/', function(req, res) {
    controller.addMessage(req.body.user,req.body.message)
    .then((fullMesssage) => {
        response.success(req, res, fullMesssage, 201)
    })
    .catch(e => {
        response.error(req, res, 'Información invalida', 400, 'Error en el controlador')
    })
    // console.log(req.body)//Recupera parametros desde el form , json etc
    // console.log(req.query)//recupera parametros desde la url
    // // res.send('Mensaje '+ req.body.texto+' añadido correctamente')
    // if(req.query.error == 'ok'){
    //     response.success(req,res,'Errorr',400)
    // }
    // response.success(req,res,'Mensaje '+ req.body.texto+' añadido correctamente')
})

router.patch('/:id', function(req, res) {
    

    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e)
        })

    // res.send('okis')
})

router.delete('/:id', function(req,res){
    controller.deleteMessage(req.params.id)
        .then(() => {
            response.success(req,res,`Mensaje ${req.params.id} eliminado`,200)
        })
        .catch(e => {
            response.error(req,res,'Error Interno',500,e)
        })
})

module.exports = router