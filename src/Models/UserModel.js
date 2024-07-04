import mongoose from mongoose
const userSchema=new  mongoose.Schema({
    username:{
        type:String,
        required:[true,'please provide username'],
        unique:[true,'username should be unique'],
    },
    password:{
        type:String,
        required:[true,'please provide password'],
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    email:{
        type:String,
        required:[true,'please provide email'],
        unique:[true,'email should be unique'],

    },
    avatar:{
        public_Id:{
            type:String,
        },
        secure_url:{
            type:String,
            default:""
        }
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    forgotPasswordToken:String,
    forgotPasswordTokenExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry:Date,
})
//Next js dont understand whether the model is created or not if the model is created
//then we have tell that as then it will not create the model again and again 
const User=mongoose.models.users||mongoose.model('users',userSchema)
export default User