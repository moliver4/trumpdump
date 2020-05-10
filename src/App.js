import React from 'react';
import MainContainer from './MainContainer'
import './App.css';

function App() {

  const click = () => {
    console.log('I WAS CLICKED')
  }

  return (

    <div className="App">
      <MainContainer clickFunction={click} name={'Tiffany'} data={'stuff'}/>  
    </div>

  );
}

export default App;
