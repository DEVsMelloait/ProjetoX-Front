import axios from "axios";
import { env } from "$env/dynamic/public"; 
const http = axios.create({
    baseURL: env.PUBLIC_SVELTE_APP_URL,
    headers: {
        'Content-Type': 'application/json',
    }
})


export { http }
