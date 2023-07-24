const  authorize = (roles=[]) => {
    if(typeof roles === 'string'){
        roles = [roles]     
    }
    return   (req,res,next)=>{
           if(roles.length && !roles.includes(req.user.role)){
               return res.status(200).json({success:false,error:"unauthorized"})
           }
           next()
        }
   
    
}

export default authorize;