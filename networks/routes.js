const express = require('express')
const message = require('../components/messages/network')
const user = require('../components/user/network')

const router = function(server){
    server.use('/message',message)
    server.use('/user',user)
}

module.exports = router