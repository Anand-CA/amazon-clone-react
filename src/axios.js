import axios from "axios"

const instance = axios.create({
    baseURL : "https://amazon-clone-react-nodejs.herokuapp.com"
})

export default instance