import axios from "axios";

export const instance = axios.create({
    baseURL: "https://dummyapi.io/data/v1/",
    headers: {
        'content-type': 'application/json',
        'app-id': '61c4706de3d41c4f601df7f1'
    }
})



