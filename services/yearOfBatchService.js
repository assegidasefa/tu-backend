import YearBatch from '../models/YearBatch.js';


export const createBatchService = (body) => {
  return YearBatch.create(body)
};

export const getBatchById = (id) => {
  return YearBatch.findOne( {where: { batch_id:id },raw:true}) 
};

export const updateBatchService = (id, body) => {
  return YearBatch.update(body,{where:{batch_id:id}})
};


export const deleteBatchService = (id) => {
  return YearBatch.destroy({where:{batch_id:id}})
};






