import { DataTypes } from "sequelize";
import { sequelize } from "../database/connection.js";

const Department = sequelize.define(
  "department",
  {
    department_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    department_name: {
      type: DataTypes.STRING,
      required: true,
    },
    university_id: {
      type: DataTypes.INTEGER,
      references: "university", // <<< Note, its table's name, not object name
      referencesKey: "university_id", // <<< Note, its a column name
    },
    
  },
  {
    timestamps: true,
    tableName: "department",
  }
);

export default Department;
