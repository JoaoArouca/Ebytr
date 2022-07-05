import { Request, Response } from "express";
import { createTask, deleteTask, getAllTask, getOneTask, updateTask } from "../Service/TaskService";

export const getAll = async (_req: Request, res: Response) => {
  try {
    const tasks = await getAllTask();
    
    return res.status(200).json(tasks);
  } catch (error: any) {
    return res.status(error.status).json(error.message);
    
  }
} 

export const getOne = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const setID = Number(id);
    const task = await getOneTask(setID);
  
    return res.status(200).json(task);
  } catch (error: any) {
    return res.status(error.status).json(error.message);
  }
}

export const create = async (req: Request, res: Response) => {
  try {
    const { task } = req.body;
    await createTask(task);

    return res.status(201).json();
  } catch (error: any) {
    return res.status(error.status).json(error.message);
  }
}

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { task } = req.body;
    await updateTask(Number(id), task)

    return res.status(200).json();
  } catch (error: any) {
    return res.status(error.status).json(error.message);
  }
}

export const deleteOne = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteTask(Number(id));

    return res.status(204).json();
  } catch (error: any) {
    return res.status(error.status).json(error.message);
  }
}