import React from "react";
import PropTypes from 'prop-types';
import { TaskContext } from "./context";

export default function Provider({ children }) {
  const globalState = {}

  return (
    <TaskContext.Provider value={ globalState }>
      { children }
    </TaskContext.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.objectOf(Object).isRequired,
}