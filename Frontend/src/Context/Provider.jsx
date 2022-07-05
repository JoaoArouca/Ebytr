import React, { useState } from "react";
import PropTypes from 'prop-types';
import { TaskContext } from "./context";
import taskApi, { updateTask1 } from "../Services/api";
import { createTask } from "../Services/api";

export default function Provider({ children }) {
  // HOOKS
  const [tasks, setTasks] = useState('');
  const [newTask, setNewTask] = useState('');

  // REQUESTS
  const get = async () => taskApi('GET', '/').then((response) => setTasks(response.data));

  const create = async (task) => createTask('/', { task }).then(get);

  const remove = async (id) => taskApi('DELETE', `/${id}`).then(get);
  
  const put = async (id, task) => updateTask1('PUT', `/${id}`, task).then(get);


  const globalState = {
    tasks, setTasks, get, create, remove, put,
    setNewTask, newTask
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