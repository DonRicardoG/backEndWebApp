import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "railway",
  "postgres",
  "*1a2*12-C2CEB41dgcfe*EFfBG3BD-5d",
  {
    host: "viaduct.proxy.rlwy.net",
    dialect: "postgres",
  }
);
