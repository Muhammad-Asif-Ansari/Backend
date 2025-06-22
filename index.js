import express from "express"
import routerHandle from "./routes/index.js";
import mongoose from "./db/index.js";
import cors from "cors";
import chalk from "chalk";
import 'dotenv/config'
const PORT = process.env.PORT || 8000
const app = express();
app.use(express.json());

// mongoose.connection.on("error",(err)=>{
//     console.log("Database error",err);
    
// })


// mongoose.connection.on("open",()=>{
//     console.log("Database Connected");
    
// })

app.get("/", (req, res) => {
    res.send("Hello Server")
})

app.use("/api", routerHandle)

app.listen(PORT, () => {
    console.log(`server is running ${PORT}`);
})