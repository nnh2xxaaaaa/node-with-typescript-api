import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import Data from "./api/render";
import info_user from "./button/Click";
import { engine } from "express-handlebars";
import path from "path";
//used global variables
dotenv.config();
//used express by app
const app: Express = express();
//used port in local server
const port = process.env.PORT_7000 || 8000; // Use process.env.PORT instead of process.env.PORT_8000
app.use(express.json());
// set default settings for handlebars
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
//setting handlebars
app.set("view engine", "hbs");

//setting handlebars
app.set(
  "views",
  path.join(__dirname, "/resources/views") // Correct the path to views
);
//test path
console.log("Path", __dirname + "/resources/views/layouts");
//create api with static
app.use(express.static(path.join(__dirname, "public")));

//create api
app.get("/", (req: Request, res: Response) => {
  res.send(`<h1>ok</h1>`);
});

//create api
app.get("/api", (req: Request, res: Response) => {
  res.send(JSON.stringify(Data));
});
//create api
app.get("/api/user", (req: Request, res: Response) => {
  res.send(info_user());
});
//create api

app.get("/api/data", (req: Request, res: Response) => {
  res.render("home");
});
// active api
app.listen(port, () => {
  console.log(
    `⚡️[server]: Server is running at http://localhost:${port}/api/data`
  );
});
