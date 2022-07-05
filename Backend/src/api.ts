import express from 'express';
import router from './Routes';
import cors = require('cors');

const api = express();

api.use(cors())
api.use(express.json());
api.use(router)

export default api
