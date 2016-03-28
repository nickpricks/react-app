import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router'



//import App from './components/App';
import routes from './components/routes'


render(
    <Router routes={routes} history={hashHistory}/>,
    document.getElementById('app')
)
