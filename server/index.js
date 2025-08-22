import express from "express"
import Router from "./router/router.js"
import {connectDB} from "./connect.js"
import cors from "cors"
import dotenv from "dotenv"
let app = express()

dotenv.config({quiet:true})
connectDB()

// const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    // origin:"*",
    origin:"https://fitness-web-page-6kvl.vercel.app",
    credentials:true,
      methods: ["GET", "POST", "PUT", "DELETE","OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"]
}))
app.use("/api",Router)

// app.listen(PORT,()=>{
//     console.log("server run")
// })

export default app