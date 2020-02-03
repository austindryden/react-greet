import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Greet from './Greet';
import Counter from './Counter';

function App() {
  return (
    <div>
      <Counter initialValue={1337} increment ={2}/>
      <Counter initialValue={69} increment ={4}/>
      <Counter initialValue={420} increment ={6}/>
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
