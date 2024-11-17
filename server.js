//  const express = require('express')
//  const path = require('path')
//  const app = express()
//  const Port = process.env.Port || 5000

// const { json } = require("body-parser")
// const { call } = require("function-bind")

//  app.set('view engine',"ejs")
//  console.log(app.get("views"))

//   app.use(express.static("public")
// );
//  app.get('/',(req,res)=>{
//   res.render('index.ejs')
//  });

//  app.get('/about',(req,res)=>{
//     res.render('about.ejs')
//    });

// app.get("/download",(req,res)=>{
//     res.download(path.resolve(__dirname) + "/about.html")
// })


//  app.listen(Port,()=>{
//     console.log('listen and port 5000 is working')
//  });
 


// const express   = require('express')
// const app = express()

// app.get('/',(req,res)=>{
//    //res.writeHead(200,{"content-Type":"application\Json"})
//    res.send("Hello this is port 4000")
//    res.end()
// })

// app.get('/about',(req,res)=>{
//   // res.writeHead(200,{"content-Type":"application\Json"})
//   res.send("yaha this is a about page")
//   res.end()
// })
// let Port = process.env.Port || 2000
// app.listen(Port,(error)=>{
//    if(error){
//       throw err
//    }
//    console.log("My server is working")
// })

const { name } = require('ejs')
const express = require('express')
const app = express()
const db = require('./db')
const Person  = require('./public/person')
const bodyParser = require('body-parser') 

app.use(bodyParser.json())



 app.get('/',(req , res)=>{
 res.send("this is the first page")
 })
 

 app.post('/person', async (req, res)=>{
try{ 
   const data  = req.body
   const newPerson = new  Person(data);

   const saveData = await newPerson.save()
   console.log("Save-data is saved")
   res.status(200).json(saveData)
}

   catch(err){
   console.log(err)
   res.status(500).json({error: "internal data not saved "})
   }
 

 })

 app.get('/person', async (req,res)=>{
   try{
      const data = await Person.find()
      console.log("internal data is get")
      res.status(200).json(data)

   }catch(err){
      console.log(err)
      res.status(200).json({error : "internal data not get"})
   }
 })
 

Port = process.env.Port || 5600
app.listen(Port,()=>{
   console.log("the server is working in the terminal Hola amigo")
})

 