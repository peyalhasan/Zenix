import { userModel } from "@/models/user-model"
import { connectMongo } from "@/service/mongo"
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs";


export const POST = async(request)=>{
   const {fname,lname,email,password}  = await request.json()

   await connectMongo()

   const hasPassword = await bcrypt.hash(password, 5)

   const newUser = {
    name: `${fname} ${lname}`,
    email,
    password: hasPassword,
   }


   try{
    await userModel.create(newUser);
    return new NextResponse("User has been created", {
        status: 201
    })
   }catch(error){
    return new NextResponse(error.message, {
        status: 500
    })
   }
}