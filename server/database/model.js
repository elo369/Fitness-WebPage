import { Schema,model } from "mongoose";

let formData = new Schema({
    name:{
        type:String,
    },
    number:{
        type:Number
    }
})

 let  formModel = model("Form",formData)

 export default formModel

