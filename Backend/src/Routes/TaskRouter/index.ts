import { create, deleteOne, getOne, update } from './../../Controller/TaskController';
import { Router } from "express";
import { getAll } from "../../Controller/TaskController";

const taskRouter = Router();

// Create
taskRouter.post('/', create);

// Read All
taskRouter.get('/', getAll);

// Read One
taskRouter.get('/:id', getOne)

// Update
taskRouter.put('/:id', update)

// Delete
taskRouter.delete('/:id', deleteOne);


export default taskRouter;