
import { Schema, model } from "mongoose";


const userSchema = new Schema({
    userName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    profilePic: { type: String },
    coverPics: { type: Array },
    phone: { type: String},
    role: { type: String,  default:'User'},
    confirmEmail: { type: Boolean,default:false},

}, {
    timestamps: true
})

const userModel =  model('User' , userSchema)

export default  userModel