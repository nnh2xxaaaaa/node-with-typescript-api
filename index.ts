import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import Data from "./src/api/render";
import info_user from "./src/button/Click";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000; // Updated port configuration

app.use(express.json()); // Added middleware to parse JSON data

app.get("/api", (req: Request, res: Response) => {
  res.send(JSON.stringify(Data));
});

app.post("/api", (req: Request, res: Response) => {
  req.body.id = "1"; // Updated to set the id in the request body
  res.send(req.body); // Added response to acknowledge the request
});

app.get("/api/1", (req: Request, res: Response) => {
  const result = info_user();
  res.send(result);
  console.log("running");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}/api`);
});
