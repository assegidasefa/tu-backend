import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("ivrdb",'root','Til&123!tek',{
    host:"localhost",
    dialect:"mysql",
    pool:{
        max:10,
        min: 0,
        idle:10000

    },
    logging:false
})

sequelize.authenticate().then(()=>{
    console.log("Connection has stablished successfully");
}).catch((err)=>{
    console.log("Unable to connetct to the database",err)
})