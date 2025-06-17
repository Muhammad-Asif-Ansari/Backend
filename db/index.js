import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/user/index.js";
dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
  .then(() =>{
    
   console.log("MongoDB connected")
    insertData()
  }
)
  .catch((err) => {
    console.error("MongoDB connection error:", err)});


const insertData = async ()=>{
    try {
        const user = new User({
            username: "Ahmed",
            email: "ahmed@example.com",
            password: "3243978",
            phone: 12635767890
        }
      );

        await user.save();
        console.log("User saved successfully");
        mongoose.disconnect();
    } catch (err) {
        console.error("Error saving user", err);
    }
}




  

export default mongoose;