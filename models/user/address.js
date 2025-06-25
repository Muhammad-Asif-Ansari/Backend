import mongoose, { Schema } from "mongoose";


const AddressSchema = new Schema({
    userId: {
       type: String,
        ref: "User"
    },
    street: {
       type: String,
        required: true,
    },
    state: {
       type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    postalCode: {
        type: String,
        required: true,
    },


})

export const Address = mongoose.model("Address",AddressSchema)