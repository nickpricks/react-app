import React    from 'react';
import ReactDOM from 'react-dom';
import { Nav, NavItem } from 'react-bootstrap';
import NavLink from './NavLink';

class Header extends React.Component{

    render(){
        return (
            <div>
                <h1>React Router Tutorial</h1>
                <ul role="nav">
                    <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default Header