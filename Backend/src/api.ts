import express from 'express';
import router from './Routes';

const api = express();

api.use(express.json());
api.use(router)

export default api
