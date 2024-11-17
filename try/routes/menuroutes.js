const express = require('express')
const router = express.Router()
const MenuItems = require('./../menu') 

// data saving
router.post('/',async (req,res)=>{
    try{
     const parser = req.body
        const Menu = new MenuItems(parser)
        const MenuInfo =  await Menu.save()
        console.log('internal data is saved')
        res.status(200).json(MenuInfo)

    }catch(err){
   consolee.log(err)
   res.status(500).json({error : 'internal data not saved'})
    }
})

// data read

router.get('/',async(req,res)=>{
    try{
      const final = await MenuItems.find()
      console.log('getting the data')
      res.status(200).json(final)
    }catch(err){
  console.log(err)
  res.status(500).json({error: "not getting the data"})
    }
})

// data parameterised
router.get('/:taste',async(req,res)=>{
  try{
    const taste = req.params.taste
    if(taste == 'spicy'|| taste == 'sweet' || taste == 'sour'){
      const find = await MenuItems.find({taste : taste})
      console.log('target is set')
      res.status(200).json(find)
    }else{
      res.status(404).json({error : "invaild taste"})
    }

  }catch(err){
console.log(err)
res.status(500).json({error: 'internal data have some issue'})
  }

})
//data updated
router.put('/:id',async(req,res)=>{
  try{
    const menuId = req.params.id
    const updateMenuId = req.body
    const find  = await MenuItems.findByIdAndUpdate(menuId,updateMenuId,{
      new : true,
      runValidators : true
    })
    if(!find){
      res.status(404).json({error:"menu id is not found"})
    }
    console.log("menu data is updated")
    res.status(200).json(find)
  }catch(err){
console.log(err)
res.status(500).json()
  }
})

// data delete

router.delete('/:id', async(req,res)=>{
  try{
    const menuId = req.params.id
    const find = await MenuItems.findByIdAndDelete(menuId)
    if(!find){
      res.status(404).json({error:'menu id is not find'})
    }
console.log('menu data is deleted')
res.status(200).json({message : 'id deleted sucessfully'})
  }catch(err){
    console.log(err)
    res.status(500).json({error:'data have some issue'})

  }
})

module.exports = router 