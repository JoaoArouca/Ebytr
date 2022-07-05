import axios from 'axios';

const HOST = "db" || "localhost";
const PORT = 3001;

const fetch = axios.create({
  baseURL: `http://${HOST}:${PORT}`,
  timeout: 1000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

const taskApi = async (method, endpoint, body) => fetch
  .request({ method, url: endpoint, data: body })
    .then(({ status, data }) => ({ status, data }));

export default taskApi