const express=require("express")
const { UserModel } = require("../model/userSchems")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const userRoute=express.Router()
 userRoute.get("/",async(req,res)=>{
  res.send("EVation-4")
 })

userRoute.post("/register",async(req,res)=>{
    const{email,password,gender,name}=req.body
    
    bcrypt.hash(password, 5, async(err, hash) =>{
        let user=new UserModel({email,password:hash,gender,name})
        await user.save()

        res.send({"msg":"register successfully"})
    });
    try {
       
        
    } catch (error) {
        res.send({"msg":"some thing went wrong"})
        console.log(error)
        
    }
})


userRoute.post("/login",async(req,res)=>{
    const{email,password}=req.body

    try {
        let user= await UserModel.find({email})
        if(user.length>0){
            bcrypt.compare(password, user[0].password, (err, result)=> {
                if(result){
                    var token = jwt.sign({userID:user[0]._id}, 'kailash');
                    res.send({"msg":"Login Succesfully","token":token})
                }else{
                    res.send({"msg":"some thing went wrong"})
                }
            });
        }else{
            res.send({"msg":"User NOT Found"})
        }
       
       
       
        
    } catch (error) {
        res.send({"msg":"some thing went wrong"})
        console.log(error)
        
    }
})


module.exports={
    userRoute
}