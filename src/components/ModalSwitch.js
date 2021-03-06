import React, { Component } from 'react';

import Home from './Home';
import Login from './Login';

import {
    Switch,
    Route,
} from "react-router-dom";

export default class ModalSwitch extends Component {
    render() {
        return <Switch>
        <Route exact path="/login">
            <Login />
        </Route>
        <Route path="/">
            <Home />
        </Route>
    </Switch>
        
    }
}