import axios, { AxiosRequestConfig } from 'axios';

const myAxios = axios.create({
    baseURL: "http://localhost:3004/"
})

const requestHandler = (request:AxiosRequestConfig) => {
    // Add a method which has list of urls for which token need not be added
    let token = "1234ghjk";// get the token from localstorage
    request.headers = {
        'Authorization': `Bearer ${token}`
    } 
    console.log(JSON.stringify(request));
    return request;
}


myAxios.interceptors.request.use(request => {
    console.log("interceptor");
    return requestHandler(request)
});





export default myAxios;