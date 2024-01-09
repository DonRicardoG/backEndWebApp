import app from "./app.js";
import "dotenv/config";
import { sequelize } from "./database/db.js";
// import { fillDb } from "./middlewares/filldb.js";

const port = process.env.PORT;

async function main() {
  try {
    await sequelize.sync({ force: false });
    console.log("after sequelize");
    // await fillDb();
    app.listen(5432);
    console.log("after listen");
  } catch (error) {
    console.error("Unable to connect to the database", error);
  }
}

main();
