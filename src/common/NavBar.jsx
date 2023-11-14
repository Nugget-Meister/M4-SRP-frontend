import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Image } from 'react-bootstrap';

import logoImg from "../assets/logoB.png" 

const NavBar = () => {
    const imageURL = "/"
    return (
        <div className='NavBar'>
            <Navbar expand="lg" className='bg-body-tertiary'>
                <Container>
                    {/* <Nav.Link href="/" className='px-4'>
                        Home
                    </Nav.Link> */}
                    <Nav.Link href="/new" className='px-4'>
                        Donate a Book
                    </Nav.Link>
                </Container>
                <Container className='justify-content-center'>
                    <Navbar.Brand> 
                        <Nav.Link href="/" className='px-4'>
                            <Image 
                                className='px-2'
                                style={{height: "50px"}}
                                src={logoImg}/>
                            <span>Shelf</span>
                            <span> Space</span>
                        </Nav.Link>
                    </Navbar.Brand>
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
