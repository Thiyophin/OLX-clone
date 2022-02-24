import React from 'react';
import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Signup from './Pages/Signup'
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/signup' element={ <Signup />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
