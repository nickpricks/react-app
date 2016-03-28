import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Layout from './Layout'
import About from './About'
import Home from './Home'

module.exports = (
    <Route path="/" component={Layout}>
        <IndexRoute component={Home}/>
        <Route path="/about" component={About}/>
    </Route>
)
