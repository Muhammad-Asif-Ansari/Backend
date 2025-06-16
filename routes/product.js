import express from 'express';
import users from '../contant.js';

const product = express.Router()
product.use("/",(req,res)=>{
    res.send(users)
})

export default product;