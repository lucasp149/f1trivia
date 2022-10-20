import './App.css';
import Level1 from './pages/level1';
import Level2 from './pages/level2';
import Level3 from './pages/level3';
import Inicio from './pages/inicio';
import Level1BIS from './pages/level1BIS';
import End from './pages/end';
import React from 'react';
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import Context from './components/context';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


function App() {
  // const location = useLocation();
  return (
    <Context>
      <BrowserRouter>
        <TransitionGroup>
          <CSSTransition /*key={location.key}*/ timeout={2000} classNames="fade">
            <Routes>

              <Route path="/" element={<Inicio />}></Route>
              <Route path="level1" element={<Level1 />}></Route>
              <Route path="level2" element={<Level2 />}></Route>
              <Route path="level3" element={<Level3 />}></Route>
              <Route path="end" element={<End />}></Route>
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </BrowserRouter>
    </Context>
  );
}

export default App;
