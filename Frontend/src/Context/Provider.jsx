import React, { useState } from "react";
import PropTypes from 'prop-types';
import { TaskContext } from "./context";
import taskApi from "../Services/api";

export default function Provider({ children }) {
  const [task, setTask] = useState('');

  const getTasks = async () =>
    await taskApi('GET', '/')
      .then((response) => setTask(response.data));

  const addTask = async (task) => taskApi('POST', '/', { task }).then(getTasks);

  const rmTask = async (id) =>
    taskApi('DELETE', `/${id}`)
      .then(getTasks);
  
  const putTask = async (id, task) =>
    await taskApi('PUT', `/${id}`,  task)
      .then(getTasks);


  const globalState = {
    task, setTask, getTasks, addTask, rmTask, putTask
  }

  return (
    <TaskContext.Provider value={ globalState }>
      { children }
    </TaskContext.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.arrayOf(Object).isRequired,
}