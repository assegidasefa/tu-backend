import { getCorrectPhoneNumber, isValidPhoneNumber } from "../helpers/validatePhoneNumber.js";
import { createUserService } from "../services/userService.js";
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid';



export const createUser = (req, res) => {
  const body = req.body;
  createUserHandler(body)
    .then((resp) => {
      res.status(200).send({ success: true, resp });
    })
    .catch((err) => {
      res.status(200).send({ success: false, error: "Something is wrong" });
    });
};

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
