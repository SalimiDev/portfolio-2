import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import Bannner from './components/Bannner';

const App = () => {
  return (
    <div>
      <NavBar/>
      <Bannner/>
    </div>
  );
};

export default App;
