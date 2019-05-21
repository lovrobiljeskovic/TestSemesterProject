
const api = require("axios").create({ 
    baseURL: "http://localhost:8000/api" ,
    withCredentials: true,
})

export default api;