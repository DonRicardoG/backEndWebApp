import express from "express";
import clientRoutes from "./routes/clients.routes.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import morgan from "morgan";
import "dotenv/config";

const Db_url = process.env.DB_URL;

const app = express();

app.disable("x-powered-by");

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", Db_url);
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(express.json());

app.use(clientRoutes);

export default app;
