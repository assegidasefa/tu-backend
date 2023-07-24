import  jwt from "jsonwebtoken";
import fs from "fs";
import path, { resolve } from "path";

const __dirname = path.resolve();

const publicKey = fs.readFileSync(__dirname + "/controllers/jwtRS256.key.pub");


export default function authentication (req, res, next) {
  const token =
    req.body.token ||
    req.query.token ||
    req.headers["x-access-token"] ||
    req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    res.send({ success: false, error: "JWT: No token provided" });
  }
  try {
    
  const decode = jwt.verify(token, publicKey,{algorithm: "RS256"}) 
  req.user = decode

  } catch (error) {
    return res.send({ success: false, error: `Invalid token ${error}` })
  }

  return next();
}
