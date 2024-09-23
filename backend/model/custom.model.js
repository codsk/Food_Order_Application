import mongoose from "mongoose"
let customSchema=mongoose.Schema(
  {
    "id": {
      type:Number,
      require:true
    },
    "tname": {
      type:String,
      require:true
    },
    "price":{
      type:Number,
      require:true
    } ,
    "image": {
      type:String,
      require:false
    } 
  }
)
export const Items=mongoose.model('customPizza',customSchema)
