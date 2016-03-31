import React    from 'react';
import ReactDOM from 'react-dom';
import { Nav, NavItem, Navbar, NavDropdown, MenuItem } from 'react-bootstrap';
import NavLink from './NavLink';

class Header extends React.Component{

    render(){
        return (
            <div>

                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            React App
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem >
                                <NavLink to="/" onlyActiveOnIndex>Home</NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink to="/about">About</NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink to="/todo">TO DO</NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink to="/search">Search</NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink to="/contacts">Contacts</NavLink>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header