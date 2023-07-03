import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import Data from "./api/render";
import info_user from "./button/Click";
import { engine } from "express-handlebars";
import path from "path";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000; // Use process.env.PORT instead of process.env.PORT_8000
app.use(express.json());

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set(
  "views",
  path.join(__dirname, "/resources/views") // Correct the path to views
);

console.log("Path", __dirname + "/resources/views/layouts");
app.get("/api", (req: Request, res: Response) => {
  res.send(JSON.stringify(Data));
});

app.get("/api/user", (req: Request, res: Response) => {
  res.send(info_user());
});

app.get("/api/data", (req: Request, res: Response) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(
    `⚡️[server]: Server is running at http://localhost:${port}/api/data`
  );
});
