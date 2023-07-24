import { createNewsService, getNewsById, updateNewsService } from "../services/newsService.js"


export const createNews = (req,res) =>{
    const body = req.body
    createNewsHandler(body).then((resp) =>{
        res.status(200).send({success:true,data:resp})
    }).catch((err)=> {
        res.status(200).send({success:false, error: "Something went worng"})
      })
}


export const getNews = (req,res) =>{
    const {id} = req.params
    getNewsHandler(id).then((resp) =>{
        res.status(200).send({success:true,data:resp})
    }).catch((err)=> {
        res.status(200).send({success:false, error: "Something went worng"})
      })
}


export const updateNews = (req,res) =>{
     const {id} = req.params 
     const body = req.body
     updateNewsHandler(id,body).then((resp) =>{
        res.status(200).send({success:true,data:resp})
    }).catch((err)=> {
        res.status(200).send({success:false, error: "Something went worng"})
      })
}
// aysnc operations 

const createNewsHandler = async (body) =>{
    const callLog = await createNewsService(body);
}


const getNewsHandler = async (id) =>{
    const result = await getNewsById(id);
    return result
}

const updateNewsHandler = async (id,body) =>{
    const result = await updateNewsService(id,body);
    return result
}





