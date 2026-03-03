import mongoose, { Schema } from "mongoose";

const amenitiesSchema = new Schema({
    name:{
        required: true,
        type: String,
    },
    price:{
        required: true,
        type: Number,
    },
    instructions:{
        required: false,
        type: String,
    },
    hours: {
        required: true,
        type: String
    }
})

export const amenitiesModel = mongoose.models.amenities ?? mongoose.model('amenities', amenitiesSchema)