import Joi from 'joi';
import { Address } from "../../models/user/address.js";
const addressValidationSchema = Joi.object({
    userId:Joi.string().required(),
    street:Joi.string().required(),
    city:Joi.string().required(),
    state:Joi.string().required(),
     country:Joi.string().required(),
     postalCode:Joi.string().required(),
})

export const newAddress = async(req,res)=>{
    try{
        const { userId, street, city, state, country,postalCode } = req.body;
         await addressValidationSchema.validateAsync(req.body);
           const newAddress = await Address.create({
                   userId:userId,
                    street:street,
                     city:city,
                     state:state,
                      country:country,
                      postalCode:postalCode
                    })
         res.status(200).send({status:500,message:"Address Add Successfully ",data:newAddress})
    }
    catch(err){
        res.status(200).send({status:500,message:err.message})
    }
}