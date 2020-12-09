import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Start from './components/Start';
import Cover from './components/CoverPage';
import Exercises from './components/Exercises';
import Level from './components/Level';
import BubblesGame from './components/games/BubblesGame';
import BoomGame from './components/games/BoomGame';


function App() {
  return (
    <div className="App">

      <Router>
        <header className="header">
          <nav className="nav">

            <div className="left__side_nav content_box">
              <li>
                <Link to={'/'}>
                  <span className="red logo">Type</span>
                  <span className="withe logo">10</span>
                </Link>
              </li>
            </div>

            <div className="right__side_nav content_box">
              <li className="menu__option"><Link to={'/boomgame'} className="menu__link">Bomba</Link></li>
              <li className="menu__option"><Link to={'/bubblesgame'} className="menu__link">Burbujas</Link></li>
              <li className="menu__option"><Link to={'/start'} className="menu__link">Instrucciones</Link></li>
              <li className="menu__option"><Link to={'/exercises'} className="menu__link">Ejercicios</Link></li>
            </div>

          </nav>
        </header>

        <Switch>
          <Route exact path='/' component={Cover} />
          <Route path='/start' component={Start} />
          <Route path='/exercises' component={Exercises} />
          <Route path='/level' component={Level} />
          <Route path='/bubblesgame' component={BubblesGame} />
          <Route path='/boomgame' component={BoomGame} />
        </Switch>

      </Router>

    </div>
  );
}

export default App;
