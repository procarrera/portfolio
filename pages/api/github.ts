import axios from "axios";

const api = axios.create({
    baseURL: "https://api.github.com",
    headers: {
        Authorization: `token ${process.env.GITHUB_KEY}`,
        "Content-Type": "application/json",
        "Accept": "application/vnd.github.mercy-preview+json",
    },
    timeout: 10000,
    responseType: 'json',
});

export default api;