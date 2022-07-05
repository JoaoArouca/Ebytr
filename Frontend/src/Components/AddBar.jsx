import React, { useContext } from 'react';
import { TaskContext } from '../Context/context';

function AddBar() {
  const { setNewTask, create, newTask } = useContext(TaskContext);

  const handleChange = ({ target }) => {
    setNewTask(target.value)
  }


  return (
    <form>
      <input type='text' onChange={(e) => handleChange(e)} />
      <button onClick={ () => create(newTask)} type='button'>Add Task</button>
    </form>
  );
}

export default AddBar;