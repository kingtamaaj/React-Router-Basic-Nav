import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Home />
    <About />
    <Navigation />
    <Contact />
  </div>
);


export default App;
