import React, { Component } from 'react';
import '../static/HomeTest.css';

import {
    Switch,
    Route,
} from "react-router-dom";

import Nav from './Nav';
import HomePage from './HomePage';
import PlayWithHuman from './PlayWithHuman';
import Profile from './Profile';
import ArticlesList from './ArticlesList';
import Lesson from './Lesson';
import HistoryPage from './HistoryPage';
import Friends from './Friends';
import Users from './Users';

// container

import ChoseLevelAiContainer from '../container/ChoseLevelAiContainer';
import PlayWithAiContainer from '../container/PlayWithAiContainer';

export default class Home extends Component {
    render() {
        return <div className='row home'>
            <div className='col-2 nav-home'>
                <Nav />
            </div>
            <div className='col-10'>
                <Switch>
                    <Route path="/playwithhuman">
                        <PlayWithHuman />
                    </Route>
                    <Route path="/playwithai">
                        <ChoseLevelAiContainer />
                    </Route>
                    <Route path="/gamewithai">
                        <PlayWithAiContainer />
                    </Route>
                    <Route path="/articles">
                        <ArticlesList />
                    </Route>
                    <Route path="/lesson">
                        <Lesson />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="/history">
                        <HistoryPage />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/friends">
                        <Friends />
                    </Route>
                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </div>
        </div>
    }
}