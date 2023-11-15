import React from 'react';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import loginImage from "../assets/loginImage.jpg"

const Login = () => {
    return (
        <div>

            <Container className='widget-entry rounded my-4 d-flex'>
                <Container className='flex-fill'>Welcome!</Container>
                <Container className='flex-fill'>
                    <Image 
                        src={loginImage}
                        className='img-fluid'
                        />
                </Container>
            </Container>
        </div>
    );
}

export default Login;
