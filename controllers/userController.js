import { createUserService } from "../services/userService";

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
  
  const resp = await createUserService(body);
  return resp;
};
