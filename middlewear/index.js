import jwt from "jsonwebtoken"

 const verifyToken = (req,res,next)=>{
    console.log("middel==>")
    next()
}
export default verifyToken 