import React from 'react';
import './App.css';
import Header from './Components/Header/Headerr';
import Cover from './Components/Cover/Cover'
import DigitalPaket from './Components/DigitalPaket/DigitalPaket'
import { BrowserRouter } from 'react-router-dom';
function App() {
  
  return (
    <BrowserRouter>
    <div className="App">

      <Header />
      <Cover  />
			<DigitalPaket />

    </div>

   </BrowserRouter>
  );
}

export default App;
