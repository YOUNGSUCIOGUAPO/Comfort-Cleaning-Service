import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    fisrtname:{
        type: String,
        default: "",
        required: true
    },
    lastname: {
        type: Number,
        required: true,
        default: ""
    },
    email: {
        type: String,
        required: true,
        default: ""
    },
    secondaryemail: {
        type: String,
        required: true,
        default:"" 
    },
    phone: {
        type: String,
        required: true,
        default: ""
    },
    secondaryphone: {
        type: String,
        required: true,
        default: ""
    },
    address: {
        type: String,
        required: true,
        default: ""
    },
    apartmentnumber: {
        type: String,
        default: ""
    }
},
{ timestamps: true })

const user = mongoose.model("userBooking", userbookingSchema);
export default user;