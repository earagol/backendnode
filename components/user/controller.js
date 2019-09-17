const store = require('./store')

function addUser(name) {
    if(!name){
        console.error('[userController] No hay usuario')
        return Promise.reject('Invalid name')
    }

    const fullUser = {
        name : name,
        date: new Date()
    }

    return store.add(fullUser)
}

function getUsers(){
    return new Promise((resolve,reject) => {
        resolve(store.getUsers())
    })
}


module.exports = {
    addUser,
    getUsers
}