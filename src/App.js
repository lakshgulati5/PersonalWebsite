import logo from './logo.svg';
import './App.css';
import React from 'react';
import Hero from './components/Hero/Hero.js';
import Education from './components/Education/Education.js';
import Experience from './components/Experience/Experience.js';


function App() {
  return (
    <div>
      <Hero/>
      <Education/>
      <Experience/>
    </div>
  );
}

export default App;
