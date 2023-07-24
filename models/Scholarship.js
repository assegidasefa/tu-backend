import { DataTypes } from "sequelize";
import { sequelize } from "../database/connection.js";

const ScholarShip = sequelize.define(
  "scholarship",
  {
    scholarship_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    scholarship_description: {
      type: DataTypes.STRING,
      required: true,
    },
    scholarship_link: {
      type: DataTypes.STRING,
      required: true,
    },
    scholarship_picture: {
      type: DataTypes.BLOB,
      required: true,
    },
    
  },
  {
    timestamps: true,
    tableName: "scholarship",
  }
);

export default ScholarShip;
