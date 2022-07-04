import { Router } from "express";
import getAll from "../../Controller/TaskController";

const taskRouter = Router();


taskRouter.get('/', getAll);

export default taskRouter;