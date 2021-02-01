import axios from "axios";

const api = axios.create({
    baseURL: "https://api.github.com",
    headers: {
        Authorization: `token 5e1b469215e90d0e784df8b7ecb3aa07d37b9d32`,
        "Content-Type": "application/json",
        "Accept": "application/vnd.github.mercy-preview+json",
    },
    timeout: 10000,
    responseType: 'json',
});

export default api;