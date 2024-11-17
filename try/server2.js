const express = require('express')
const app = express()
const db = require('./db1')
const bodyParser = require('body-parser')
app.use(bodyParser.json())


app.get('/' ,(req,res)=>{
    res.write('this is the first page of the info')
    res.end()
})

const infoRoutes = require('./routes/infoRoutes')
app.use('/info',infoRoutes)

const menuT = require('./routes/menuroutes')
app.use('/menu',menuT)

Port = process.env.Port || 4500
app.listen(4500,()=>{
    console.log('local host working')
})