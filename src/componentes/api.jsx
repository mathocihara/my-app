import axios from "axios";

const Api = axios.create({  
    baseURL:'https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1'

})

export default Api;