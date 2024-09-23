import mongoose from "mongoose";

const pizzaSchema=mongoose.Schema({
    id:{
      type:Number,
      require:true
    },
    type:{
      type:String,
      require:true
    },
    price:{
      type:Number,
      require:true
    },
    name:{
      type:String,
      require:true
    },
    image:{
      type:String,
      require:false
    },
    description:{
      type:String,
      require:true
    },
    ingredients:{
      type:Array,
      require:true
    },
    topping:{
      type:Array,
      require:true
    }
})

export const PizzaSchema=mongoose.model('pizza',pizzaSchema)
