import { createUniversityService, getUniversityById, updateUniversityService} from "../services/universityService.js"


export const createUniversity = (req,res) =>{
    const body = req.body
    createUniversityHandler(body).then((resp) =>{
        res.status(200).send({success:true,data:resp})
    }).catch((err)=> {
        res.status(200).send({success:false, error: "Something went worng"})
      })
}


export const getUniversity = (req,res) =>{
    const {id} = req.params
    getUniversityHandler(id).then((resp) =>{
        res.status(200).send({success:true,data:resp})
    }).catch((err)=> {
        res.status(200).send({success:false, error: "Something went worng"})
      })
}


export const updateUniversity = (req,res) =>{
     const {id} = req.params 
     const body = req.body
     updateUniversityHandler(id,body).then((resp) =>{
        res.status(200).send({success:true,data:resp})
    }).catch((err)=> {
        res.status(200).send({success:false, error: "Something went worng"})
      })
}
// aysnc operations 

const createUniversityHandler = async (body) =>{
    const callLog = await createUniversityService(body);
}


const getUniversityHandler = async (id) =>{
    const result = await getUniversityById(id);
    return result
}

const updateUniversityHandler = async (id,body) =>{
    const result = await updateUniversityService(id,body);
    return result
}





