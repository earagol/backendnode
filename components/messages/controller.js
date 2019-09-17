const store = require('./store')
function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        if(!user || !message){
            console.error('[messageController] No ay usuario o mensaje')
            return reject('Los datos son incorrectos')
        }
        const fullMessage = {
            user : user,
            message : message,
            date: new Date()
        }
    
        // console.log(fullMessage)
        store.add(fullMessage)
        resolve(fullMessage)
    })
    
}

function getMessage(filterUser) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser))
    })
}

function updateMessage(id,message) {
    return new Promise(async (resolve, reject) => {
        if(!id || !message){
            reject('Invalid data')
        }
        const result = await store.updateText(id,message)
        resolve(result)

    })
}

function deleteMessage(id){
    return new Promise((resolve,reject) => {
        if(!id){
            reject('Id invalido')
            return false
        }
        store.remove(id)
            .then(() => {
                resolve()
            })
            .catch(e => {
                reject(e)
            })
    })
}

module.exports = {
    addMessage,
    getMessage,
    updateMessage,
    deleteMessage
}