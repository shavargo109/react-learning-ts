import React, { useState } from 'react';
import './App.css';
import { Main } from './components/MainComponenet';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Main />
      </div >

    </BrowserRouter>
  );
}
export default App;
