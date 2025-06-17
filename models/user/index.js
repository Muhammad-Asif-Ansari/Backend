// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     username:{
//         type : mongoose.Schema.Types.String,
//     },
//     email:{
//          type : mongoose.Schema.Types.String,
//     },
//     password:{
//          type : mongoose.Schema.Types.String,
//     }
// })

// const User = mongoose.model('user',userSchema)

// export default User;

import mongoose, { Schema } from "mongoose";


const UserSchema = new Schema({
    username: {
        type: Schema.Types.String,
        required: true
    },
    email: {
        type: Schema.Types.String,
        required: true,
        unique: true
    },
    password: {
        type: Schema.Types.String,
        required: true
    },
    phone: {
        type: Schema.Types.Number,
        required: true
    },
})

const User = mongoose.model("User", UserSchema)

export default User;