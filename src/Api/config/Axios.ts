import axios from 'axios'

const Axios = axios.create({
    // baseURL: 'Products/product_data.json',
    // timeout: 1000,
    // headers: { 'X-Custom-Header': 'foobar' },
});

export default Axios