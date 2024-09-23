import express from "express";
import fs from 'fs'
import { Items } from '../model/custom.model.js'

const router1=express.Router()

router1.post('/',async (req,res)=>{
  try{
    let custom_list=fs.readFileSync('backend/assets/ingredients.json','utf8')
    custom_list=JSON.parse(custom_list)
    const data=await Items.create(custom_list)
    res.status(200).json(data)
  }catch(err){
    console.log({message:err.message}) 
  }
})

router1.get('/', async (req,res)=>{
  try{
    const data=await Items.find()
    res.status(200).json(data)
  }catch(err){
    res.status(500).json({message:err.message})
  }
})

export default router1;