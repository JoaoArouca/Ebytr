import React, { useContext, useState } from 'react';
import { TaskContext } from '../Context/context';

function UpdateForm(id) {
  const [showForm, setShowForm] = useState(false);
  const [newUpdate, setUpdate] = useState('');
  const { put } = useContext(TaskContext);

  const handleClick = () => {
    if (showForm) {
      setShowForm(false);
    } else {
      setShowForm(true);
    }
  }

  const handleChange = ({ target }) => {
    setUpdate(target.value);
  }

  const handleUpdate = async (id, newUpdate) => {
    await put(id, newUpdate);
    setShowForm(false);
  } 
  return (
    <div>
      {
        showForm ? (
          <form>
            <input type='text' onChange={(e) => handleChange(e)} />
            <button type='button' onClick={() => handleUpdate(id, newUpdate)} >Update Task</button>
          </form>
        ) :
          <button onClick={handleClick} type='button'>Update</button>
      }
    </div>
  );
}

export default UpdateForm;