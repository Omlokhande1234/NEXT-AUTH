import { connection } from "@/dbconfig/dbConfig";
import { NextRequest ,NextResponse } from "next/server";
import User from "@/Models/UserModel";

connection()

export async function POST(req:NextRequest){
    try {
        const reqBody=await req.json()
        const {token}=reqBody

        const user=await User.findOne({verifyToken:token,verifyTokenExpiry:{$gt:Date.now()}})
        if(!user){
            return NextResponse.json({error:"Invalid token"},{status:400})
        }
        console.log(user)

        user.isVerified=true
        user.verifyToken=undefined
        user.verifyTokenExpiry=undefined

        await user.save()

        return NextResponse.json({
            message:"Email verified successfully",
            success:true
        },{status:200})

        
    } catch (error) {
        console.log(error)
        return NextResponse.json({error:error},{status:500})
    }
}