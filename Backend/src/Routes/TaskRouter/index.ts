import { Router } from "express";
/* import TaskController from "../../Controller/TaskController"; */

const taskRouter = Router();

/* const task = new TaskController(); */

taskRouter.get('/', () => { console.log('cheguei');
 })

export default taskRouter;