import axios from "axios";

async function getUser() {
  try {
    const response = await axios.get("http://localhost:3000/api");
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

getUser();
