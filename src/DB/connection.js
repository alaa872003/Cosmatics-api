import  mongoose  from "mongoose";
import { config } from './../config/env.js';

const DataBase = async()=>{
try{
        const connection = await mongoose.connect(`${config.MONGODB_URI}`)
    if(connection){
        console.log(`DB is connected`);
        
    }else{
        console.log(`DB is failed`,error);
        
    }
}catch(error){
    console.log(error);
    
}
}


export default DataBase;