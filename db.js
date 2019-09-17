const db = require('mongoose')

db.Promise = global.Promise

async function connect(url){
    // console.log('kokoko')
    await db.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('[db] Conectada con éxito')
}

module.exports = connect



