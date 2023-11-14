import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Image, Button } from 'react-bootstrap';

import logoImg from "../assets/logoB.png" 
import "./styles/NavBar.css"

const NavBar = () => {
    return (
        <div className=''>
            <Navbar 
                expand="lg" 
                className='navbar-bg-brown py-1'>
                <Container>
                    {/* <Nav.Link href="/" className='px-4'>
                        Home
                    </Nav.Link> */}
                    <Nav.Link 
                        href="/new" 
                        className='px-4 text-white'>
                        Donate a Book
                    </Nav.Link>
                </Container>
                <Container className='justify-content-center'>
                    <Navbar.Brand> 
                        <Nav.Link 
                            href="/" 
                            className='px-4 text-white d-flex align-items-center navbar-font'>
                            <Image 
                                className='px-2'
                                style={{height: "50px"}}
                                src={logoImg}/>
                            <span className='navbar-orange fs-3 px-2'>Shelf</span>
                            <span className='text-white fs-3'> Space</span>
                        </Nav.Link>
                    </Navbar.Brand>
                </Container>
                <Container className='justify-content-end'>
                    <Nav.Link href='/login' className='mx-4'>
                        <Button
                            variant='primary'
                            className='rounded-pill button-login py-3 px-4 shadow-sm'
                        >Log-in / Sign Up</Button>
                    </Nav.Link>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;
