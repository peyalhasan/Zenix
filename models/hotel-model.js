import mongoose, { Schema } from "mongoose";

const hotelSchema = new Schema({
    name:{
        required: true,
        type: String,
    },
    address1:{
        required: true,
        type: String,
    },
    airportCode:{  // ✅ FIXED: was "airpostCode"
        required: true,
        type:String
    },
    city:{
        required: true,
        type:String,
    },
    countryCode:{
        required:false,
        type:String,
    },
    highRate:{
        required: false,
        type: Number,
    },
    lowRate:{
        required: false,
        type: Number,
    },
    propertyCategory:{
        required: false,
        type: Number
    },
    stateProvinceCode: {
        required: false,
        type: String,
    },
    thumbnailUrl:{ 
        required: false,
        type: String
    },
    gallery:{
        required: false,
        type: Array,
    },
    overview:{
        required: false,
        type: String,
    },
    amenities:{
        required: false,
        type: Array
    },
    location:{  
        required: false,
        type: Object
    },
    locationDescription:{ 
        required: false,
        type: String
    },
    postalCode:{  
        required: false,
        type: String
    },
    shortDescription:{ 
        required: false,
        type: String
    }
});

export const hotelModel = mongoose.models.hotels ?? mongoose.model("hotels", hotelSchema)