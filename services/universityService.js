import University from '../models/University.js';


export const createUniversityService = (body) => {
  return University.create(body)
};

export const getUniversityById = (id) => {
  return University.findOne( {where: { university_id:id },raw:true}) 
};

export const updateUniversityService = (id, body) => {
  return University.update(body,{where:{university_id:id}})
};





