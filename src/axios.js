import axios from "axios";
/* baseURL to make requests to the movies */
const instance = axios.create({
  //axios.create is on of the methods in axios to have the baseURL in it
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
