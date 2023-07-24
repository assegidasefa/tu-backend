import User from '../models/User.js';


export const createUserService = (body) => {
  return User.create(body)
};

export const getUserById = (id) => {
  return User.findOne( {where: { user_id:id },raw:true}) 
};

export const updateUserService = (id, body) => {
  return User.update(body,{where:{user_id:id}})
};


export const deleteUserService = (id) => {
    return User.destroy({where:{user_id:id}})
  };
  
  


