import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
const NavBar = () => {
    return (
        <div>
            <Navbar expand="lg" className='bg-body-tertiary'>
                <Container>
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>New Shelf</Nav.Link>
                    <Navbar.Brand>Shelf Space</Navbar.Brand>
                    <Nav.Link>Log-in / Sign Up</Nav.Link>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;
