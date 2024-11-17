const express = require('express')
const router = express.Router()
const info = require('./../info')
const { message } = require('statuses')


router.post('/',async (req,res)=>{
    try{
    
        const data = req.body
    
        const newperson = new info(data) 
    
        const response = await newperson.save()
    
        console.log('internal data is saved')
        res.status(200).json(response)
    
    }catch(err){
        console.log(err)
          res.status(500).json({error : 'internal data not saved'})
    }
    })
     
    
    



router.get('/' ,async (req,res)=>{
    try{
    const search = await info.find()
    console.log('get data is find')
    res.status(200).json(search)
    }catch(err){
        console.log(err)
        res.status(500).json({error:"get data  has error"})
    }
})



router.get('/:workType', async (req,res)=>{
    try{
    const workType = req.params.workType
    if(workType == 'artist' || workType == 'journalist' || workType == 'IPS'){
    const find =  await info.find({work : workType});
    console.log('target is set')
    res.status(200).json(find)
    }else{
        res.status(404).json({error : "invaild work type"})
    }
    }catch(err){
    console.log(err)
    res.status(500).json({error : "something problem"})
    }
})

router.put('/:id', async (req,res)=>{
    try{
  const personId = req.params.id
const updatePersonData = req.body
const response = await info.findByIdAndUpdate(personId,updatePersonData,{

    new : true,
    runValidators : true,})

    if(!response){
        res.status(404).json({error:'Person Id is not found'})
    }
    console.log('data update')
    res.status(200).json(response)
    }catch(err){
   console.log(err)
   req.status(500).json({error:"data update have some issue"})
    }
})

router.delete('/:id',async(req,res)=>{
try{
    const personId = req.params.id
const response = await info.findByIdAndDelete(personId)
if(!response){
    res.status(404).json({error: 'delete id is found'})
}
console.log('data is delete')
res.status(200).json({message: ' id is delete sucessfully'})

}catch(err){
console.log(err)
res.status(500).json({error:'data is not delete'})
}
})

module.exports = router;