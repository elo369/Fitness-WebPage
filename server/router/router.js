import express from "express"
import { submit } from "../controller/controller.js"

let Router = express.Router()

Router.post("/submit",submit)

export default Router