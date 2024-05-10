import React from 'react';

import './App.css';
import Header from './Components/Header';
import {Route, Routes } from 'react-router-dom';
import Login from './Pages/Auth';
import Homepage from './Pages/Homepage';
import Movies from './Pages/Movies';

import SeatArrangement from './Pages/SeatSelection';
import Auth from './Pages/Auth';
import SeatBooking from './Pages/SeatSelection';

function App() {
  return (
    <div className="App">
     <Header/> 
     <Routes>
     <Route path='/login' element={<Auth></Auth>}></Route>
      <Route path='/register' element={<Auth register></Auth>}></Route>
      <Route path='/' element={<Homepage/>} />
      <Route path='/Movies' element={<Movies/>} />
      <Route  path="/Movies/:id" element={<SeatBooking/> }/>
     </Routes>
    </div>
  );
}

export default App;
