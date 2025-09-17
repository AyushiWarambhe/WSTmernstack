import express from "express"
import dotenv from "dotenv"
import router from "./router/router.js"



dotenv.config({path:"./config.env"})
const app = express()
let port = process.env.PORT

app.use(router)

app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
})