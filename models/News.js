import {DataTypes} from 'sequelize';
import { sequelize } from '../database/connection.js'

const News = sequelize.define('news', {
    news_id:{
        type: DataTypes.INTEGER,
        primaryKey:true
    },
    news_title:{
        type: DataTypes.STRING,
        required:true
    },
    news_link:{
        type: DataTypes.STRING,
        required:true
    },
    news_description: {
        type: DataTypes.STRING,
        required: true
    },
    news_no_of_viewer: {
        type: DataTypes.INTEGER,
        required: true,
        defaultValue:0
    },
    news_picture:{
        type:DataTypes.BLOB,  
    },   
    },{
       timestamps:true,
       tableName:'news'
    });

    export default News;

