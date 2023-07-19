import {DataTypes} from 'sequelize';
import { sequelize } from '../database/connection.js'

const University = sequelize.define('university', {
    university_id:{
        type: DataTypes.INTEGER,
        primaryKey:true
    },
    university_name:{
        type: DataTypes.STRING,
        required:true
    },
    university_location:{
        type: DataTypes.STRING,
        required:true
    },
    university_description: {
        type: DataTypes.STRING,
        required: true
    },
    university_foundation_date: {
        type: DataTypes.STRING,
        required: true
    },
   
    },{
       timestamps:true,
       tableName:'university'
    });

    export default University;

