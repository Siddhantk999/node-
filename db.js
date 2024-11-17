const mongoose =  require('mongoose')
let mongooseURL = 'mongodb://localhost:27017/Data'

mongoose.connect(mongooseURL,{
    
})

const db = mongoose.connection

db.on('connected',()=>{
    console.log("mongodb server is working")

})

db.on('error',(err)=>{
    console.log('something went wrong here',err)
})

db.on('disconnected',()=>{
    console.log("mongodb is disconnected") 
})  

module.exports = db; 