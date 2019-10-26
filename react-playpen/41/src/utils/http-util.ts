import axios from 'axios';

const myInstance = axios.create({
    baseURL:"http://localhost:3004/shareholders"
})

export default myInstance;