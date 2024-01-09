import { Sequelize } from "sequelize";
import "dotenv/config";

const DB_URL = process.env.DB_URL;

console.log(DB_URL);
export const sequelize = new Sequelize(
  "postgres://backend_webapp_user:bwt6CdJsKAG5zCWCA0a6peZjKqlMNk2M@dpg-cmemrnn109ks73c8obd0-a.oregon-postgres.render.com/backend_webapp"
);
