import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import Bannner from './components/Bannner';
import Skills from './components/Skills';
import Projects from './components/Projects';

const App = () => {
  return (
    <div>
      <NavBar/>
      <Bannner/>
      <Skills/>
      <Projects/>
    </div>
  );
};

export default App;
