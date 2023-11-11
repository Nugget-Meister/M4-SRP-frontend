import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <div className='NavBar'>
            <Navbar expand="lg" className='bg-body-tertiary'>
                <Container>
                    <Nav.Link href="/" className='px-4'>
                        Home
                    </Nav.Link>
                    <Nav.Link href="/new" classname='px-4'>
                        New Entry
                    </Nav.Link>
                </Container>
                <Container className='justify-content-center'>
                    <Navbar.Brand>Shelf Space</Navbar.Brand>
                </Container>
                <Container className='justify-content-end'>
                    <Nav.Link href='/login' className='mx-4'>
                        Log-in / Sign Up
                    </Nav.Link>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;
