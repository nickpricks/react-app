import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Layout from './Layout'
import About  from './About'
import Home   from './Home'
import Todo   from './Todo'
import Search from './Search'
import Contacts from './Contacts/Contacts'

module.exports = (
    <Route path="/" component={Layout}>
        <IndexRoute component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/todo" component={Todo}/>
        <Route path="/search" component={Search}/>
        <Route path="/contacts" component={Contacts}/>
    </Route>
)
