import getAllTask from "../Service/TaskService";

const getAll = async () => {
  try {
    const tasks = await getAllTask();
    console.log(tasks);
    
    
  } catch (error) {
    console.log(error);
    
  }
} 

export default getAll;