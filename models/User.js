import { DataTypes } from "sequelize";
import { sequelize } from "../database/connection.js";

const User = sequelize.define(
  "user",
  {
    user_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      required: true,
    },
    lastName: {
      type: DataTypes.STRING,
      required: true,
    },
    email: {
      type: DataTypes.STRING,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      required: true,
    },
    role: {
      type: DataTypes.STRING,
      enum: ["USER", "ADMIN"],
      default: "USER",
      required: true,
    },
    password: {
      type: DataTypes.STRING,
      required: true,
    },
  },
  {
    timestamps: true,
    tableName: "user",
  }
);

export default User;
