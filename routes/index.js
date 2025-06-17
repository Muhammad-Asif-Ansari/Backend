import express from "express";
import user from "./user.js";
import product from "./product.js";
import profile from "./profiles.js";
import post from "./post.js";

const routerHandle = express.Router()

routerHandle.use("/user",user)
routerHandle.use("/product",product)
routerHandle.use("/profile",profile)
routerHandle.use("/post",post)
export default routerHandle;