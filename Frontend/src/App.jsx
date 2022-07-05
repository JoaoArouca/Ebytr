import React from 'react';
import './App.css';
import AddBar from './Components/AddBar';
import Provider from './Context/Provider';

function App() {
  return (
    <Provider>
      <AddBar />
    </Provider>
    
  );
}

export default App;
