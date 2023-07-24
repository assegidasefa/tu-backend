import { getCorrectPhoneNumber, isValidPhoneNumber } from "../helpers/validatePhoneNumber.js";
import { createUserService, deleteUserService, getAllUserService, getUserByIdService, updateUserService } from "../services/userService.js";
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid';



export const createUser = (req, res) => {
  const body = req.body;
  createUserHandler(body)
    .then((resp) => {
      res.status(200).send({ success: true, resp });
    })
    .catch((err) => {
      res.status(200).send({ success: false, error: "Something is went wrong" });
    });
};

export const getUserById = (req,res) =>{
    const id = req.params.id
    getUserHandler(id).then((resp)=>{
        res.status(200).send({success:true,resp})
    }).catch((err)=>{
        res.status(200).send({success:false,error:"Something is went wrong"})
    })
}


export const updateUserById = (req,res) =>{
    const id = req.params.id
    const body = req.body
    updateUserHandler(id,body).then(()=>{
        res.status(200).send({success:true,message:"updated successfully!!"})
    }).catch((err)=>{
        res.status(200).send({success:false,error:"Something is went wrong"})
    })
}


export const deleteUserById = (req,res) => {
    const id = req.params.id
    deleteUserHandler(id).then((resp)=>{
        res.status(200).send({success:true,resp})
    }).catch((err)=>{
        res.status(200).send({success:false,error:"Something is went wrong"})
    })
}

export const getAllUser = (req,res) => {
    getAllUserHandler().then((resp)=>{
        res.status(200).send({success:true,resp})
    }).catch((err)=>{
        res.status(200).send({success:false,error:'Something is Went wrong'})
    })
}
// async operation

const createUserHandler = async (body) => {
    const isvalidPhone = isValidPhoneNumber(body.phoneNumber)
    if (!isvalidPhone) {
      return { success: false, error: 'Incorrect Phone Number' }
    
    } 
    body.user_id = uuidv4()

    body.phoneNumber = getCorrectPhoneNumber(body.phoneNumber)
    body.password = bcrypt.hashSync(body.password, 10);

  const resp = await createUserService(body);
  return resp;
};


const getUserHandler = async (id) =>{
    const result = await getUserByIdService(id)
    return result
}


const updateUserHandler = async (id,body) =>{
    const result = await updateUserService(id,body)
    return result

}

const deleteUserHandler = async(id) =>{
    const result = await deleteUserService(id)
    return result
}

const getAllUserHandler = async() =>{
    const result = await getAllUserService()
    return result
}