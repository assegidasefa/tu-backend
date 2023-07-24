import ScholarShip from '../models/Scholarship.js';


export const createScholarshipService = (body) => {
  return ScholarShip.create(body)
};

export const getScholarshipById = (id) => {
  return ScholarShip.findOne( {where: { scholarship_id:id },raw:true}) 
};

export const updateScholarshipService = (id, body) => {
  return ScholarShip.update(body,{where:{scholarship_id:id}})
};


export const deleteScholarshipService = (id) => {
  return ScholarShip.destroy({where:{scholarship_id:id}})
};






