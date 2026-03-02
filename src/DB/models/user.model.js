import mongoose from "mongoose"

const userSchema=mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        select:false //used for not return password with another data
    },
    role:{
        type:String,
        enum:["client","admin"],
        default:"client",

    },
    phone:String,
    isVerified:{
        type:Boolean,
        default:false
    },  refreshToken :[
            {
                token : String ,
                expireAt : Date
            },
        ],
        resetPasswordToken : String ,
        resetPasswordExpires : Date ,
},{timestamps:true})

const User= mongoose.model.User || mongoose.model("User",userSchema);
export default User;