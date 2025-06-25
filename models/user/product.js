import mongoose, { Schema } from "mongoose";
const productSchema = new Schema({
    name: { 
        type: String,
         required: true
         },
    price: { 
        type: Number,
         required: true
         },
    category: { 
        type: String
     },
    description: { 
        type: String
     },
    stock: { 
        type: Number, 
        default: 0
     },
  createdAt:
     { type: Date,
         default: Date.now
         }
         
});

export const Product = mongoose.model("Product", productSchema)