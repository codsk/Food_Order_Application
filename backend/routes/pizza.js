import express from "express"
import fs from 'fs'
import {PizzaSchema} from '../model/order.model.js'

const router=express.Router()

router.post('/',async (req,res)=>{
  try{ 
    let pizza_list=fs.readFileSync('backend/assets/pizza.json','utf8')
    pizza_list=pizza_list.replace(/^\uFEFF/,'')
    pizza_list=JSON.parse(pizza_list)
    let Data=await PizzaSchema.create(pizza_list)
    res.status(200).json(Data)
  }catch(error){
    console.log({message:error.message})
  }
})

router.get('/',async (req,res)=>{
  try{
    let data=await PizzaSchema.find({})
    res.status(200).json(data)
  }catch(err){
    res.status(500).json({message:err.message})
  }
})

export default router;