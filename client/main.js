import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'



//import App from './components/App';
import routes from './components/routes'


render(
    <Router routes={routes} history={browserHistory}/>,
    document.getElementById('app')
)
