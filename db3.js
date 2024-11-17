const mongoose = require('mongoose')
const MongoUrl = 'mongodb://localhost:27017/store'

mongoose.connect(MongoUrl,{

})

const db = mongoose.connection

db.on('connected',()=>{
    console.log('mongodb server is connected')
})

db.on('disconnected',()=>{
    console.log('mongodb server is disconnected')
})

db.on('error',(err)=>{
    console.log('mongodb server error',err)
})

module.exports = db