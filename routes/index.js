import express from "express";
import user from "./user.js";
import product from "./product.js";
import profile from "./profiles.js";
import post from "./post.js";
import upload from "./upload.js"
import uploadFile from "./cartUpload.js"
import { CreateUser,deleteAllUsers,deleteUser,getUser,loginUser,getAllUsers,getByUsername,updateUser,updateAllUsers, CreateProduct, newAddress } from "../controllers/index.js";
const routerHandle = express.Router()

routerHandle.use("/user",user)
routerHandle.use("/product",product)
routerHandle.use("/profile",profile)
routerHandle.use("/post",post)
routerHandle.post("/signup",CreateUser)
routerHandle.post("/loginuser",loginUser)
routerHandle.delete("/deleteuser",deleteUser)
routerHandle.delete("/deleteallusers",deleteAllUsers)
routerHandle.get("/getuser",getUser)
routerHandle.get("/getAllUsers",getAllUsers)
routerHandle.get("/getusername",getByUsername)
routerHandle.put("/updateuser",updateUser)
routerHandle.put("/updateallusers",updateAllUsers)
routerHandle.post("/products",CreateProduct)
routerHandle.post("/address",newAddress)
routerHandle.use("/upload",upload)
routerHandle.use("/uploadFile",uploadFile)
export default routerHandle;