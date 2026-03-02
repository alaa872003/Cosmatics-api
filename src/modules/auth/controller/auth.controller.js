import { registerUser } from "../services/auth.service.js"

export const register=async(req,res)=>{
   const user= registerUser(req.body)
   res.status(201).json(  user , "User has been created" );


}