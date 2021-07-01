import React, { Component } from 'react';
import anime from 'animejs/lib/anime.es.js';
import '../static/HomeTest.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Nav from './Nav';
import HomePage from './HomePage';
import PlayWithHuman from './PlayWithHuman';
import ArticlesList from './ArticlesList';

export default class Home extends Component {
    constructor() {
        super();
    }

    render() {
        return <div className='row home'>
            <div className='col-2 nav-home'>
                <Nav />
            </div>
            <div className='col-10'>
                <Switch>
                    <Route path="/playwithai">
                        <PlayWithHuman />
                    </Route>
                    <Route path="/users">
                        <HomePage />
                    </Route>
                    <Route path="/articles">
                        <ArticlesList />
                    </Route>
                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </div>
        </div>
    }
}