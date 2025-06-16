import express from "express";

const profile = express.Router();
profile.use("/",(req,res)=>{
    res.send("Pofile user")
})

export default profile