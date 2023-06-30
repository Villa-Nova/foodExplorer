import axios from "axios"

//Endereço do backEnd.
export const api = axios.create({
  baseURL: "https://backend-food-explorer-5zz2.onrender.com"
})