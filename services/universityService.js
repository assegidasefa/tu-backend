import University from '../models/University.js';


export const createUniversityService = (body) => {
  return University.create(body)
};



export const updateUser = (id, newUser) => {
  return University.update(newUser,{where:{id}})
};





