import { User } from "../../models/user/index.js";
import 'dotenv/config';

export const getByUsername = async(req,res)=>{
    try{
         const getUserByUsername = await User.findOne({username : req.query.username})
       return res.status(403).send({status:403,message:"User get Successfully",data:getUserByUsername})
    }
    catch(err){
          return res.status(500).send({status:500,message:err.message})
    }
}