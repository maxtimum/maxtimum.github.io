import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './index.css';

import Homepage from './components/homepage/Homepage';
import Attractors from './components/projects/attractors/Attractors';

ReactDOM.render(
    <HashRouter basename='/'>
        <Switch>
            <Route exact path='/p/strange-attractors'>
                <Attractors />
            </Route>
            <Route exact path='/'>
                <Homepage />
            </Route>
        </Switch>
    </HashRouter>,
    document.getElementById('root')
);