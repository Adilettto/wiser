import axios from "axios";
import { baseURL } from "./config";
import { read } from "./storage";
const token = read("access");
const client = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export { client };
