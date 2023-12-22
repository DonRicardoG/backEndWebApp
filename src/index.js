import app from "./app.js";
import { sequelize } from "./database/db.js";
import { fillDb } from "./middlewares/filldb.js";

async function main() {
  try {
    await sequelize.sync({ force: false });
    await fillDb();
    app.listen(4000);
    console.log("Server is listening on port", 4000);
  } catch (error) {
    console.error("Unable to connect to the database", error);
  }
}

main();
