import { User } from "../../models/user/index.js";
import 'dotenv/config';

export const getUser = async(req,res)=>{
    try{
        await User.findOne()
       return res.status(403).send({status:403,message:"User get Successfully"})
    }
    catch(err){
          return res.status(500).send({status:500,message:err.message})
    }
}