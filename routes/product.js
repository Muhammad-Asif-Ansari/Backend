import express from 'express';
import users from '../contant.js';

const product = express.Router()
product.use("/",(req,res)=>{
    res.status(200).send(users)
})

export default product;