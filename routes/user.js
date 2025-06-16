import express from "express";


const user = express.Router()

user.use("/",(req,res)=>{
    res.send("Hello User")
})

export default user