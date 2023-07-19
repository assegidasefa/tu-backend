import { DataTypes } from "sequelize";
import { sequelize } from "../database/connection.js";

const Course = sequelize.define(
  "course",
  {
    course_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    course_name: {
      type: DataTypes.STRING,
      required: true,
    },
    department_id: {
      type: DataTypes.INTEGER,
      references: "department", // <<< Note, its table's name, not object name
      referencesKey: "department_id", // <<< Note, its a column name
    },
    
  },
  {
    timestamps: true,
    tableName: "course",
  }
);

export default Course;
