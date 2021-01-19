import React from 'react';
import { Switch, Route } from 'react-router-dom';
import '../styles/components/Layout.css'
import Header from './Header';

import Instructions from './Instructions';
import Cover from './CoverPage';
import Exercises from './Exercises';
import Level from './Level';
import BubblesGame from './games/BubblesGame';
import BoomGame from './games/BoomGame';
import About from './About';


function Layout() {
    return (
        <React.Fragment>
            <Header />
            <div className="container">
                <Switch>
                    <Route exact path='/' component={Cover} />
                    <Route path='/About' component={About} />
                    <Route path='/instructions' component={Instructions} />
                    <Route path='/exercises' component={Exercises} />
                    <Route path='/level' component={Level} />
                    <Route path='/bubblesgame' component={BubblesGame} />
                    <Route path='/boomgame' component={BoomGame} />
                </Switch>
            </div>
        </React.Fragment>
    )
}

export default Layout;

