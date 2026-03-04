import mongoose from "mongoose";


export async function connectMongo(){
    try{
        const conn = await mongoose.connect(String(process.env.MONGODB_URI))
        return conn;
    }catch(err){
        console.error(err.message)
    }
}