import axios from "axios";

const api = axios.create({
    baseURL: "https://amazon-api.sellead.com/country",
    baseURL: "https://amazon-api.sellead.com/city"
});

export default api;