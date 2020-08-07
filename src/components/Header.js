import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
      

    render() {
        return(
                <Navbar dark expand="md" className="bg-dark">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/login'><span className="fa fa-info fa-lg"></span> LogIn</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/signup'><span className="fa fa-list fa-lg"></span> SignUp</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link ml-auto"  to='/logout'><span className="fa fa-list fa-lg"></span> LogOut</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                
        );
    }
}
export default Header;