import axios from "axios";

const defaultHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

const api = axios.create({
  baseURL: `${import.meta.env.VITE_REACT_APP_API_URL}`,
  timeout: 30000,
  headers: defaultHeaders,
});

export default api;
