import {
  getCorrectPhoneNumber,
  isValidPhoneNumber,
} from "../helpers/validatePhoneNumber.js";
import {
  createUserService,
  deleteUserService,
  getAllUserService,
  getUserByIdService,
  getUserByPhoneService,
  updateUserService,
  updateUserpassword,
} from "../services/userService.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

export const createUser = (req, res) => {
  const body = req.body;
  createUserHandler(body)
    .then((resp) => {
      res.status(200).send(resp);
    })
    .catch((err) => {
      res
        .status(200)
        .send({ success: false, error: "Something is went wrong" });
    });
};

export const getUserById = (req, res) => {
  const id = req.params.id;
  getUserHandler(id)
    .then((resp) => {
      res.status(200).send(resp);
    })
    .catch((err) => {
      res
        .status(200)
        .send({ success: false, error: "Something is went wrong" });
    });
};

export const updateUserById = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  updateUserHandler(id, body)
    .then((resp) => {
      res.status(200).send(resp);
    })
    .catch((err) => {
      res
        .status(200)
        .send({ success: false, error: "Something is went wrong" });
    });
};

export const deleteUserById = (req, res) => {
  const id = req.params.id;
  deleteUserHandler(id)
    .then((resp) => {
      res.status(200).send(resp);
    })
    .catch((err) => {
      res
        .status(200)
        .send({ success: false, error: "Something is went wrong" });
    });
};

export const getAllUser = (req, res) => {
  getAllUserHandler()
    .then((resp) => {
      res.status(200).send({ success: true, resp });
    })
    .catch((err) => {
      res
        .status(200)
        .send({ success: false, error: "Something is Went wrong" });
    });
};


export const changePassword = (req, res) => {
    const body = req.body
    const {id} = req.user
    changePasswordHandler(body,id).then((resp) => {
      res.status(200).send(resp)
    }).catch((err) => {
      res.status(200).send({ success: false, error: "Something went worng" })
    })
  }
  
// async operation

const createUserHandler = async (body) => {
  const isvalidPhone = isValidPhoneNumber(body.phoneNumber);
  if (!isvalidPhone) {
    return { success: false, error: "Incorrect Phone Number" };
  }
  body.user_id = uuidv4();

  body.phoneNumber = getCorrectPhoneNumber(body.phoneNumber);
  body.password = bcrypt.hashSync(body.password, 10);

  const isPhoneUsed = await getUserByPhoneService(body.phoneNumber);
  if (isPhoneUsed) {
    return { success: false, error: "the phone is already used " };
  }

  const resp = await createUserService(body);
  return resp;
};

const getUserHandler = async (id) => {
  const result = await getUserByIdService(id);
  return { success: true, result };
};

const updateUserHandler = async (id, body) => {
  const result = await updateUserService(id, body);
  return { success: true, message: "Updated Successfully!" };
};

const deleteUserHandler = async (id) => {
  const result = await deleteUserService(id);
  return { success: true, message: "Deleted successfully!!" };
};

const getAllUserHandler = async () => {
  const result = await getAllUserService();
  return result;
};



const changePasswordHandler = async (body,id) => {
    const password = body.password
    const ComfirmPassword = body.ComfirmPassword
    const ExistingPassword = body.ExistingPassword
    const user = await getUserByIdService(id);
    const userPassword = user.password
  
    const isSame = await bcrypt.compare(ExistingPassword, userPassword)
  
    if (isSame) {
      if (password === ComfirmPassword) {
  
  
  
        if (user) {
          const newPassword = bcrypt.hashSync(password, 10);
          await updateUserpassword(id, newPassword);
          return { success: true, message: 'Successfully updated. ' };
        } else {
          return { success: false, message: 'Invalid Information' };
        }
      } else {
        return { success: false, message: "Passwords did not match" }
      }
    } else {
      return { success: false, error: "exsting passsword is incorrect!!" }
    }
  
  }