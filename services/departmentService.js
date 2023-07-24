import Department from '../models/Department.js';


export const createDepartmentService = (body) => {
  return Department.create(body)
};

export const getDepartmentById = (id) => {
  return Department.findOne( {where: { department_id:id },raw:true}) 
};

export const updateDepartmentService = (id, body) => {
  return Department.update(body,{where:{department_id:id}})
};


export const deleteDepartmentService = (id) => {
  return Department.destroy({where:{department_id:id}})
};






