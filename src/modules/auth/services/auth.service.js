import User from './../../../DB/models/user.model.js';
export const registerUser = async(userData)=>{
    const existUser= await User.findOne({email:userData.email});
    if(existUser){
        throw createConflictError("email is exist") 
    }
    const user= await User.create({...userData})
    return user
}