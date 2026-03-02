import express from "express"
import dotenv from "dotenv"
import DataBase from "./DB/connection.js"
import { config } from "./config/env.js"
import { routerHandler } from "./utils/routerHandler.js"

dotenv.config()
const bootstrap=()=>{

    const app=express()
    // DB
    DataBase()
// routers
    routerHandler(app,express)
    // listen
    const PORT=config.PORT;
    const server=app.listen(PORT,()=>{
        console.log(`server is running ${PORT} ${JSON.stringify(server.address())}`);
        
    })
}


export default bootstrap