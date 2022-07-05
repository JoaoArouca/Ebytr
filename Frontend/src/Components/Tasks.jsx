import React, { useContext, useEffect } from 'react';
import { TaskContext } from '../Context/context';

function Tasks() {

  const { getTasks, task, rmTask } = useContext(TaskContext);

  useEffect(() => {
    if(task.length === 0){
      getTasks();
    }
  }, [task, getTasks]);


  return (
    <div>
      {
        task.length > 0 && task.map(({ id, task, stats }) =>(
          <div key={ id } id>
            <div>
              <h2>{ task }</h2>
              <span>{ stats }</span>
            </div>
            <div>
              <button onClick={() => rmTask(id)} type='button'>Delete</button>
              <button type='button'>Update</button>
            </div>
            
          </div>
        )
        )
      }
    </div>
  );
}

export default Tasks;
