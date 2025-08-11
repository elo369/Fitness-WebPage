import mongoose from "mongoose";


export let  connectDB = async ()=>{
    try {
        let connect = await mongoose.connect(process.env.DATABASE)

         console.log(
            "Database connected: ",
            connect.connection.host,
            connect.connection.name
        )
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}