import Course from '../models/Course.js';


export const createCourseService = (body) => {
  return Course.create(body)
};

export const getCourseById = (id) => {
  return Course.findOne( {where: { course_id:id },raw:true}) 
};

export const updateCourseService = (id, body) => {
  return Course.update(body,{where:{course_id:id}})
};


export const deleteCourseService = (id) => {
  return Course.destroy({where:{course_id:id}})
};






