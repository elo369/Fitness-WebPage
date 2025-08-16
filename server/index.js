import express from "express"
import Router from "./router/router.js"
import {connectDB} from "./connect.js"
import cors from "cors"
import dotenv from "dotenv"
let app = express()

dotenv.config()
connectDB()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:["https://fitness-web-page-6kvl.vercel.app",process.env.FRONTEND],
    credentials:true,
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
}))
app.use("/api",Router)

// app.listen(5000,()=>{
//     console.log("server run")
// })

export default app