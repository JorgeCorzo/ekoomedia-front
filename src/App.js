import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './views/Home';
import Form1 from './views/Form1';
import Form2 from './views/Form2';
import Form3 from './views/Form3';
import './App.scss';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />

        <Route exact path="/" component={Home} />
        <Route exact path="/form1" component={Form1} />
        <Route exact path="/form2" component={Form2} />
        <Route exact path="/form3" component={Form3} />
      </div>
    </HashRouter >
  );
}

export default App;
