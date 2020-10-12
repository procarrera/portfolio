import axios from "axios";

const api = axios.create({
    baseURL: "https://api.github.com",
    headers: {
        Authorization: `Bearer ${process.env.GITHUB_KEY}`,
        "Content-Type": "application/json"
    },
    withCredentials: true,
    auth: {
        username: `${process.env.GITHUB_USER}`,
        password: `${process.env.GITHUB_PASSWORD}`
    },
    timeout: 10000,
    responseType: 'json',
});

export default api;