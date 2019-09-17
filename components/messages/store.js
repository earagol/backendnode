const Model = require('./model')

function addMessage(message){
    // list.push(message)
    const myMessage = new Model(message)
    myMessage.save()
}

async function getMessage(filterUser){
    // return list
    // let filter = {}
    // if(filterUser !== null){
    //     filter = {user: filterUser}
    // }
    // const message = Model.find(filter)
    //                     .catch(e => {
    //                         reject(e);
    //                     });
    // return(message)
    return new Promise((resolve,reject) => {
        let filter = {}
        if(filterUser !== null){
            filter = {user: filterUser}
        }
        Model.find(filter)
            .populate('user')
            .exec((error,populated) => {
                if(error){
                    reject(error)
                    return false
                }
                resolve(populated)
            })
        // resolve(message)
    })
    
}

async function updateText(id, message){
    const foundMessage = await Model.findOne({
        _id: id
    })
    console.log(foundMessage,message)
    foundMessage.message = message
    const newMessage = await foundMessage.save()
    return newMessage
}

function removeMessage(id){
    return Model.deleteOne({
        _id:id
    })
}



module.exports = {
    add: addMessage,
    list: getMessage,
    updateText: updateText,
    remove: removeMessage
}