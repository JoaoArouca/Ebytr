import React, { useState } from "react";
import PropTypes from 'prop-types';
import { TaskContext } from "./context";

export default function Provider({ children }) {
  const [task, setTask] = useState('');
  const globalState = {
    task, setTask,
  }

  return (
    <TaskContext.Provider value={ globalState }>
      { children }
    </TaskContext.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.objectOf(Object).isRequired,
}