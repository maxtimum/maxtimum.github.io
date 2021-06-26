import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';

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
                <App />
            </Route>
        </Switch>
    </HashRouter>,
    document.getElementById('root')
);