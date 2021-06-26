import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import Attractors from './components/projects/attractors';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path='/proj/viz'>
                <div>visualizer</div>
            </Route>
            <Route exact path='/proj'>
                <div>all projects</div>
            </Route>
            <Route exact path='/'>
                <Attractors />
            </Route>
        </Switch>
    </HashRouter>,
    document.getElementById('root')
);