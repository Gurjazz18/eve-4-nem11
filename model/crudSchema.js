const mongoose=require("mongoose")

const crudSchema=mongoose.Schema({
    title:String,
    body: String,
    device : String,
    userID:String
})


const AppModel=mongoose.model("socialapp",crudSchema)

module.exports={
    AppModel
}