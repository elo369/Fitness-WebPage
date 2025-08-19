import mongoose from "mongoose";


export const connectDB = async ()=>{
    try {
        if(mongoose.connection.readyState === 0){
        let connect = await mongoose.connect(process.env.MONGO_URI,{
            serverSelectionTimeoutMS: 5000
        })

         console.log(
            "Database connected: ",
            connect.connection.host,
            connect.connection.name
        )
    }else{
        console.log("MongoDB already connected")
    }
    } catch (error) {
        console.log(error)
        throw error
    }
}