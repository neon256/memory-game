import logo from './logo.svg';
import './App.css';
import Card from './components/card/card';
import { useEffect, useMemo, useState } from 'react';
import Countdown from 'react-countdown';
import Game from './components/game/game';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/app-router/app-router';

///,
function App() {
  
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
   
  );
}

export default App;
