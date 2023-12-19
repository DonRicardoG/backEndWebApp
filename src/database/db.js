import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("WebAppDB", "postgres", "admin", {
  host: "localhost",
  dialect: "postgres",
});
