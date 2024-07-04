import mongoose from "mongoose";



export const connection=()=>{
    try{
        mongoose.connect(process.env.MONGO_URL!)
        const connection=mongoose.connection
        connection.on('connected',()=>{
            console.log('connected to mongoDB')
        })
        connection.on("error",()=>{
            console.log('error in connecting to mongoDB')
            process.exit()
        })
    }catch(error){
        console.log(error)
    }
}