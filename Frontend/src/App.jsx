import React from 'react';
import './App.css';
import AddBar from './Components/AddBar';
import Tasks from './Components/Tasks';
import Provider from './Context/Provider';

function App() {
  return (
    <Provider>
      <AddBar />
      <Tasks />
    </Provider>
    
  );
}

export default App;
