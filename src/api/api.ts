import axios from "axios";
import fs from "fs";

async function fetchData(api: string, nameFile: string) {
  try {
    const response = await axios.get(api);
    const jsonData = JSON.stringify(response.data, null, 2);
    fs.writeFile(nameFile, jsonData, "utf8", (err) => {
      if (err) {
        console.error("An error occurred while writing the file:", err);
      } else {
        console.log("JSON file has been created successfully.");
      }
    });
  } catch (error) {
    console.error(error);
  }
}

fetchData(
  "https://dummyjson.com/users",
  "/Users/huyngo/Documents/node-express-typescript/node-express/src/api/dataUser1.json"
);
