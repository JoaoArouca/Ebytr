import React, { useContext, useEffect } from 'react';
import { TaskContext } from '../Context/context';
import UpdateForm from './UpdateForm';

function Tasks() {

  const { get, tasks, remove } = useContext(TaskContext);

  useEffect(() => {
    if(tasks.length === 0){
      get();
    }
  }, [tasks, get]);


  return (
    <div>
      {
        tasks.length > 0 && tasks.map(({ id, task, stats }) =>(
          <main key={ id } id>
            <section>
              <h2>{ task }</h2>
              <select>
                <option value={stats} defaultValue>{stats}</option>
                <option value={'Em andamento'}>Em andamento</option>
                <option value={'Feito'}>Feito</option>
              </select>
            </section>

            <section>
                <button onClick={() => remove(id)} type='button'>Delete</button>
                <UpdateForm id={id} />
            </section>
          </main>
          )
          
        )
      }
    </div>
  );
}

export default Tasks;
