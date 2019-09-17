const express = require('express')
const response = require('../../networks/response')
const controller = require('./controller')
const router = express.Router()

router.get('/', function(req,res){
    controller.getUsers()
        .then((users) => {
            response.success(req,res,users,200)
        })
        .catch(e => {
            response.error(req,res,'Internal error',500,e)
        })
})

router.post('/', function(req, res) {
    controller.addUser(req.body.name)
    .then((fullUser) => {
        response.success(req, res, fullUser, 201)
    })
    .catch(e => {
        response.error(req, res, 'Internal Error', 500, e)
    })
})

module.exports = router