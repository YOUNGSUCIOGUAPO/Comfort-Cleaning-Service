import mongoose from "mongoose";
import { Schema } from "mongoose";

const userbookingSchema = new Schema({
    frequency:{
        type: String,
        default: "",
        required: true
    },
    sqft: {
        type: Number,
        required: true,
        default: 0
    },
    bathrooms: {
        type: Number,
        required: true,
        default: 0
    },
    bedrooms: {
        type: Number,
        required: true,
        default: 0
    },
    extras: [
        {
            Deluxe_Deep_First_Time_Cleaning: {
            type: Number,
            default: 0
            },
            Open_House_Cleaning: {
            type: Number,
            default: 0
            },
            Renovation_Cleaning: {
            type: Number,
            default: 0   
            },
            Balcony_Sweeping_Mop: {
            type: Number,
            default: 0   
            },
            Finished_basement_per_500_sq_ft: {
            type: Number,
            default: 0   
            },
        }
    ],
    date: {
        type: Date,
        required: true,
    },
    optional: [
        {
            tips: {
                type: Number,
            },
            parking: {
                type: Number,
            }
        }
    ],
    specialnote: {
        type: String,
    }
},
{ timestamps: true } )


const userBooking = mongoose.model("userBooking", userbookingSchema);
export default userBooking;