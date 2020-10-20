import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Start from './components/Start';
import Cover from './components/CoverPage';
import Exercises from './components/Exercises';
import Level from './components/Level';


function App() {
  return (
    <div className="App">

      <Router>
        <header className="header">
          <nav className="content_box">

            <div className="left nav content_box">
              <li><Link to={'/'}><span className="red logo">Type</span><span className="withe logo">10</span></Link></li>
            </div>

            <div className="right nav content_box" >
              <li><Link to={'/start'} >Inicio</Link></li>
              <li><Link to={'/exercises'}>Ejercicios</Link></li> 
            </div>

          </nav>
        </header>

        <Switch>
          <Route exact path='/' component={Cover} />
          <Route path='/start' component={Start} />
          <Route path='/exercises' component={Exercises} />
          <Route path='/level' component={Level} />
        </Switch>

      </Router>

    </div>
  );
}

export default App;
