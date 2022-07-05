import axios from 'axios';


const fetch = axios.create({
  baseURL: `http://localhost:3001/task`,
  /* timeout: 1000, */
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'methods': 'POST,GET,HEAD,OPTIONS,PUT,PATCH,DELETE',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
  }
})

const taskApi = async (method, endpoint, ) => fetch
  .request({ method, url: endpoint })
    .then(({ status, data }) => ({ status, data }));

export const createTask = async (endpoint, body) => fetch.post(endpoint, body).then(response => response.data)

export const updateTask = async (endpoint, body) => fetch.put(endpoint, body).then(response => response.data)
export const updateTask1 = async (method, endpoint, body) => fetch.request({ method, url: endpoint , data: body}).then(response => response.data)

export default taskApi