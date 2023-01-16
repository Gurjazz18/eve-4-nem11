const express=require("express")
const { connection } = require("./config/db")
const { mediaRoute } = require("./controller/medisRouter")
const { userRoute } = require("./controller/userRouter")
 const { authentication } = require("./Middleware/AuthMiddleware")
 require('dotenv').config()
  const cors=require("cors")

   const app=express()
   app.use( cors())
 
  
   app.use(express.json())


   app.use("/user",userRoute)

  app.use(authentication)
  app.use("/media",mediaRoute)




 app.listen(process.env.port,async()=>{
    
 try {
    await connection
    console.log("DB IS CONNECTED")
    
 } catch (error) {
    console.log("SOME THING WENT WRONG")
    
 }


    console.log("server is running")
})


//  "name":"kailash",
// "email" :"kailash@123gmail.com",
// "gender": "Male",
// "password": "kailah123"

// "email" :"pihu@123gmail.com",

// "password": "pihu123"