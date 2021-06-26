import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import Attractors from './components/projects/attractors/Attractors';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path='/p/strange-attractors'>
                <div>visualizer</div>
            </Route>
            <Route exact path='/p/'>
                <div>all projects</div>
            </Route>
            <Route exact path='/'>
                <Attractors />
            </Route>
        </Switch>
    </HashRouter>,
    document.getElementById('root')
);