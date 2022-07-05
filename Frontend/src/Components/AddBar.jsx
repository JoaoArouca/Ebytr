import React, { useContext } from 'react';
import { TaskContext } from '../Context/context';
import taskApi from '../Services/api';
/* import PropTypes from 'prop-types'; */

/* AddBar.propTypes = {
  
}; */

function AddBar() {
  const { setTask, task } = useContext(TaskContext);

  const handleChange = ({ target }) => {
    setTask(target.value)
  }

  const getTasks = async () => taskApi('GET', 'task')
    .then(({ data: tasks }) => setTask(tasks));

  console.log(task);

  return (
    <form>
      <input type='text' onChange={(e) => handleChange(e)} />
      <button type='button' onClick={getTasks} >Add Task</button>
    </form>
  );
}

export default AddBar;