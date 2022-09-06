import axios from "axios";

const app = axios.create({
  baseURL: "https://g4-hub-api.herokuapp.com/",
});

export default app;
