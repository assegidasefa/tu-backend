import News from '../models/News.js';


export const createNewsService = (body) => {
  return News.create(body)
};

export const getNewsById = (id) => {
  return News.findOne( {where: { news_id:id },raw:true}) 
};

export const updateNewsService = (id, body) => {
  return News.update(body,{where:{news_id:id}})
};





