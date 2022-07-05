import { deleteTaskModel, updateTaskModel } from './../Model/TaskModel';
import ITask from "../Interfaces";
import { createTaskModel, getAllTasksModel, getOneTaskModel } from "../Model/TaskModel";

export const getAllTask = async (): Promise<ITask[]> => {
  const getAll = await getAllTasksModel();
  if (!getAll.length) {
    const objError = {
      status: 404,
      message:'Lista de Tarefas vazia'
    }
    throw objError;
  }
  
  return getAll;
}

export const getOneTask = async (id: number): Promise<ITask[]> => {
  const getOne = await getOneTaskModel(id);
  if (!getOne.length) {
    const objError = {
      status: 404,
      message: 'Tarefa não encontrada'
    }
    throw objError;
  }
  return getOne;
}

export const createTask = async (task: string): Promise <void> => { await createTaskModel(task) };

export const updateTask = async (id: number, task: string): Promise <void> => { await updateTaskModel(id, task) };

export const deleteTask = async (id: number): Promise <void> => { await deleteTaskModel(id) };