const express = require('express')
const app = express()
const db = require('./db3')
const bodyParser = require('body-parser')
app.use(bodyParser.json())


app.get('/', (req,res)=>{
  res.send('this is the page of the store ')
})

const storeRotuer = require('./routerstore')
app.use('/store',storeRotuer)



Port = process.env.Port || 1200
app.listen(Port,()=>{
    console.log('server is working')
})