import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import Bannner from './components/Bannner';
import Skills from './components/Skills';

const App = () => {
  return (
    <div>
      <NavBar/>
      <Bannner/>
      <Skills/>
    </div>
  );
};

export default App;
