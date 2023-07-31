import mongoose from "mongoose";
import { Schema } from "mongoose";

const cleanerSchema = new Schema({
    firstname:{
        type: String,
        default: "",
        required: true
    },
    lastname: {
        type: String,
        required: true,
        default: ""
    },
    email: {
        type: String,
        required: true,
        default: ""
    },
    password: {
        type: String,
        required: true,
        default: ""
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
    gender: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true
    }
},
{ timestamps: true })

const cleaner = mongoose.model("userBooking", cleanerSchema);
export default cleaner;