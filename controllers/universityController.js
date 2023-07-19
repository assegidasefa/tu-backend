import {createUniversity, createUniversityService} from "../services/universityService.js"


export const createUniversity = (req,res) =>{
    const body = req.body
    createUniversityHandler(body).then((resp) =>{
        res.status(200).send({success:true,data:resp})
    }).catch((err)=> {
        res.status(200).send({success:false, error: "Something went worng"})
      })
}


// aysnc operations 

const createUniversityHandler = async (body) =>{
    const callLog = await createUniversityService({body});
}






