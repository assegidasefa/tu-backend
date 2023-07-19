import { DataTypes } from "sequelize";
import { sequelize } from "../database/connection.js";

const YearBatch = sequelize.define(
  "yearBatch",
  {
    batch_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    batch_year: {
      type: DataTypes.STRING,
      required: true,
    },
    course_id: {
      type: DataTypes.INTEGER,
      references: "course", // <<< Note, its table's name, not object name
      referencesKey: "course_id", // <<< Note, its a column name
    },
  },
  {
    timestamps: true,
    tableName: "yearBatch",
  }
);

export default YearBatch;
