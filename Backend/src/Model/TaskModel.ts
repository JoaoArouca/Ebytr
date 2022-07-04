import ITask from "../Interfaces"
import connection from "./connection"

const getAllTasksModel = async (): Promise<ITask[]> => {
  const [result] = await connection.execute('SELECT * FROM Ebytr.List')
  return result as ITask[];
}

export default getAllTasksModel
