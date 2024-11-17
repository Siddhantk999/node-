const express = require('express')
const router = express.Router()
const storeItems = require('./store')


router.post('/',async(req,res)=>{
    try{
    const parser = req.body
const Items = new storeItems(parser)
const store = await Items.save()
console.log('data is saved')
res.status(200).json(store)
    }catch(err){
    console.log(err)
    res.status(500).json({error:'data is not saved'})
    }
})

router.get('/',async(req,res)=>{
    try{
    const find = await storeItems.find()
    console.log('data get sucssesfully')
    res.status(200).json(find)
    }catch(err){
        console.log(err)
        res.status(500).json({error:'data is not get'})

    }
})

router.put('/:id',async (req,res)=>{
    try{
const id = req.params.id
const updatedId = req.body
const response = await storeItems.findByIdAndUpdate(id,updatedId,{
    new : true,
    runValidators : true
})
if(!response){
    res.status(404).json({error:'id is not found'})
}
console.log('data is updated')
res.status(200).json(response)
    }catch(err){
        console.log(err)
        res.status(500).json({error:'data is not update'})
    }

})

// 

router.delete('/:id',async(req,res)=>{
    try{
const id = req.params.id
const response = await storeItems.findByIdAndDelete(id)
if(!response){
    res.status(404).json({error:'id is not found'})
}
console.log('store  data is deleted')
res.status(200).json({message:'data delete succesfully'})

    }catch(err){
        console.log(err)
        res.status(500).json({error:'data is not deleted '})
    }
})

module.exports = router; 