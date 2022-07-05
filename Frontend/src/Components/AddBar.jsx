import React, { useContext } from 'react';
import { TaskContext } from '../Context/context';
/* import PropTypes from 'prop-types'; */

/* AddBar.propTypes = {
  
}; */

function AddBar() {
  const { setTask } = useContext(TaskContext);

  const handleChange = ({ target }) => {
    setTask(target.value)
  }

  

  return (
    <form>
      <input type='text' onChange={(e) => handleChange(e)} />
      <button>Add Task</button>
    </form>
  );
}

export default AddBar;