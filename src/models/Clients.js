import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";
// hola

export const Clients = sequelize.define(
  "clients",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    website: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);
