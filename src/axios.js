import axios from 'axios';

// creating an instance (copy) of axios
const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'an AUTH TOKEN that you might need to pass -instance oriented-';

export default instance;