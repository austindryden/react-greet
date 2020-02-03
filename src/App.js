import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Greet';

function App() {
  return (
    <div>
      <Greet
        whom="Cthulu"
        how="Salutations"
        color="red"
       />
       <Greet whom="someone" how="hey" color="blue" />
       <Greet />
    </div>
  );
}

export default App;
