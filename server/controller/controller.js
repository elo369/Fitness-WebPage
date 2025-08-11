import formModel from "../database/model.js";

export const submit = async (req,res)=>{
    
    try {
        let {name,number} = req.body
        console.log(name)
        console.log(number)
        let form =  new formModel({
            name,
            number
        })
    
        form.save()
    } catch (error) {
        console.log(error)
    }
}