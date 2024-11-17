const mongoose =require('mongoose')
const mongoUrl = 'mongodb://localhost:27017/info'

mongoose.connect(mongoUrl,{
})

const db = mongoose.connection

db.on('connected',()=>{
    console.log("mongodb server is connected")
})

db.on('error',(err)=>{
     console.log('mongodb server is not connected',err)
})

db.on('disconnected',()=>{
    console.log('mongodb server is disconnected')
})



module.exports=db;