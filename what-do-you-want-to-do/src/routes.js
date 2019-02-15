import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Activities from './components/Activities/Activities';
import Entertainment from './components/Entertainment/Entertainment';
import Events from './components/Events/Events';
import Food from './components/Food/Food';
import Shopping from './components/Shopping/Shopping';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Activities' component={Activities} />
        <Route path='/Entertainment' component={Entertainment} />
        <Route path='/Events' component={Events} />
        <Route path='/Food' component={Food} />
        <Route path='/Shopping' component={Shopping} />
    </Switch>
)