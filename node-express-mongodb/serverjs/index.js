import express from "express"
import {data, info, hello} from "./index1.js"
import xyz from "./index2.js"

console.log(xyz)

console.log(data, info)
hello
let app = express()

let port= 5000

app.get ("/", (req, res)=>{
    res,send("running on port 5000")
})

app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
})