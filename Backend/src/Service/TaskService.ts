import ITask from "../Interfaces";
import getAllTasksModel from "../Model/TaskModel";

const getAllTask = async (): Promise<ITask[]> => {
  const getAll = await getAllTasksModel();
  return getAll;
}

export default getAllTask;