     const jwt = require('jsonwebtoken')

     const authentication=(req,res,next)=>{
        const token=req.headers.authorization

        var decoded = jwt.verify(token, 'kailash');

        if(decoded){
            const userID=decoded.userID
            req.body.userID=userID
            next()
        }else{
            res.send("You are authorised person")
        }

}

module.exports={
    authentication
}