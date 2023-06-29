import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import Data from "./src/api/render";
dotenv.config();

const app: Express = express();
const port = process.env.PORT_3000;

app.get("/api", (req: Request, res: Response) => {
  res.send(JSON.stringify(Data));
});
app.get("/api/1", (req: Request, res: Response) => {
  res.send(Data);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}/api`);
});
