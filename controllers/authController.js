import bcrypt from 'bcrypt'
import path from 'path'
import jwt from 'jsonwebtoken';
import fs from 'fs'
import { getUserByPhoneNumber } from '../services/userService.js';

const __dirname = path.resolve()


export const login = (req, res) => {
  const body = req.body;
  login_user(body)
    .then((resp) => {
      res.status(200).send(resp);
    })
    .catch((err) => {
      res.status(200).send({ success: false, error: "Something went worng" });
    });
};

// async operation

const login_user = async (body) => {
  const loggedUser = await getUserByPhoneNumber(body.phoneNumber);

  if (!loggedUser) {
    return { success: false, error: "Email or password incorrect" };
  }


  const checkPassword = await checkPasswordFunc(
    loggedUser.password,
    body.password
  );



  if (!checkPassword) {
    return { success: false, error: "Email or password incorrect" };
  }

  delete loggedUser.password;


  const token = await signToken(loggedUser.phoneNumber || null, loggedUser.role, loggedUser.user_id);
    // delete loggedUser.password
    return {
      success: true,
      token,
      user: loggedUser

    };
};

const checkPasswordFunc = (dbPassword, userPassword) => {
  return bcrypt.compare(userPassword, dbPassword);
};

const signToken = async (phoneNumber, role, id) => {
  const _keyDir = __dirname + "/controllers/jwtRS256.key";
  const privateKey = fs.readFileSync(_keyDir);
  const token = jwt.sign({  phoneNumber, role, id }, privateKey, {
    algorithm: "RS256",
  });
  return token;
};
