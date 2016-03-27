import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Layout from './Layout'
import About from './About'
import Repos from './Repos'
import Repo from './Repo'
import Home from './Home'

module.exports = (
    <Route path="/" component={Layout}>
        <IndexRoute component={Home}/>
        <Route path="/repos" component={Repos}>
            <Route path="/repos/:userName/:repoName" component={Repo}/>
        </Route>
        <Route path="/about" component={About}/>
    </Route>
)
