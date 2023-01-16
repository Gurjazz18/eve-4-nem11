const express=require("express")
const { AppModel } = require("../model/crudSchema")



const mediaRoute=express.Router()


 mediaRoute.get("/",async(req,res)=>{

    try {
        let data=await AppModel.find()
        res.send(data)
    } catch (error) {
        res.send({"msg":"some thing went wrong"})
        
    }
 
 })

 mediaRoute.post("/add",async(req,res)=>{
    
    
   
       
       try {
        let user=new AppModel(req.body)
        await user.save()

        res.send({"msg":"Item is added  successfully"})
        
    } catch (error) {
        res.send({"msg":"some thing went wrong"})
        console.log(error)
        
    }
})


mediaRoute.patch("/update/:id",async(req,res)=>{
    const payload=req.body
    const id=req.params.id

    const note=await AppModel.findOne({_id:id})
    const userID_in_notes=note.userID
    const userID_in_meking_req=req.body.userID

    try {
        if(userID_in_notes!==userID_in_meking_req){
            res.send("you are not authorisedPerson Man!")
            
        }else{

            await AppModel.findByIdAndUpdate({_id:id},payload)
            res.send("Post is Updated successfully Men!")
        }
    } catch (error) {
        res.send({"msg":"Some thing went wrong Men!"})
    }
   
})


mediaRoute.patch("/update/:id",async(req,res)=>{
  
    const id=req.params.id

    const note=await AppModel.findOne({_id:id})
    const userID_in_notes=note.userID
    const userID_in_meking_req=req.body.userID

    try {
        if(userID_in_notes!==userID_in_meking_req){
            res.send("you are not authorisedPerson Man!")
            
        }else{

            await AppModel.findByIdAndDelete({_id:id})
            res.send("Post is DELETED successfully Men!")
        }
    } catch (error) {
        res.send({"msg":"Some thing went wrong Men!"})
        
    }
   
})



module.exports={
    mediaRoute
}