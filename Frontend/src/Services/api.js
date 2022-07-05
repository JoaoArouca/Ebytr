import axios from 'axios';


const fetch = axios.create({
  baseURL: `http://localhost:3001/task`,
  timeout: 1000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    /* 'Access-Control-Allow-Origin': '*', */
    /* 'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS', */
    /* 'Access-Control-Allow-Headers': '*', */
  }
})

const taskApi = async (method, endpoint, body) => fetch
  .request({ method, url: endpoint, body })
    .then(({ status, data }) => ({ status, data }));

export default taskApi