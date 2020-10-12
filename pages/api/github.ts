import axios from "axios";

const api = axios.create({
    baseURL: "https://api.github.com",
    headers: {
        Authorization: `Bearer 84818fd61ac5564de3751d9a68a5dedfe54c0302`,
        "Content-Type": "application/json"
    }
});

export default api;