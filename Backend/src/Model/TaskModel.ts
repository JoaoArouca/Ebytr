import ITask from "../Interfaces"
import connection from "./connection"

export const getAllTasksModel = async (): Promise<ITask[]> => {
  const [result] = await connection.execute('SELECT * FROM Ebytr.List')
  return result as ITask[];
  
}

export const getOneTaskModel = async (id: number): Promise <ITask[]> => {
  const [result] = await connection.execute('SELECT * FROM Ebytr.List WHERE id = ?', [id]);
  
  return result as ITask[];
}

export const createTaskModel = async (task: string): Promise <void> => {
  
  await connection.execute(`INSERT INTO Ebytr.List (stats, task, createdAt) VALUES (?, ?, ?)`,
    ['Pendente', task, new Date()]);
}

export const updateTaskModel = async (id: number, task: string): Promise <void> => {
  const query = `UPDATE Ebytr.List
  SET id = ?, task = ?, createdAt = ?
  WHERE id = ?`;
  await connection.execute(query, [id, task, new Date(), id]);
}

export const deleteTaskModel = async (id: number): Promise <void> => {
  const query = `DELETE FROM Ebytr.List
  WHERE id = ?`;

  await connection.execute(query, [id]);
}