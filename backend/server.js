import express from 'express'
import {connectDB} from './config/db.js'
import  router  from './routes/pizza.js'
import  router1  from '../backend/routes/ingridents.js'
import path from 'path'
import cors from 'cors'


const app=express()
app.use(cors())
app.use(express.json())

app.use('/api/orderPizza',router) 

app.use('/api/customPizza',router1)

const __dirname=path.resolve()

if (process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname,'/frontend/build')))
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
  })
}
 
const Port=process.env.PORT || 5000
app.listen(Port,()=>{
  connectDB()
  console.log(`server is running at ${Port}`)
}) 