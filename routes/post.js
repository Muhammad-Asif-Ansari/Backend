import express from "express";
import User from "../models/user/index.js";
const post = express.Router();

post.use("/",(req,res)=>{
    const userData = new User(req.body)
    userData.save();
    console.log("req",req.body);
    
    res.send({status:200})
})

export default post;