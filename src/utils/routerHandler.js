import authRouter from "../modules/auth/routes/auth.routes.js"

export const routerHandler=async(app,express)=>{
    app.use(express.json())
    app.use("/auth",authRouter)

      app.use( "/{*any}"  , ( req , res ) =>{
        res.status(404).json({ message : "this Router is not found" })
    } )
}

export default routerHandler