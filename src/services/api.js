import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-clouddropbox.herokuapp.com',
})

export default api;