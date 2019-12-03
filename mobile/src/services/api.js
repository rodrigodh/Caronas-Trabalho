import axios from "axios";

const api = axios.create({
  baseURL: "https://caronas-backend.herokuapp.com"
});

export default api;
