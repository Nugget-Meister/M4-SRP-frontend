import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import loginImage from "../assets/loginImage.jpg"
import { GoogleLogin } from '@react-oauth/google';
// import { oauthSignIn, onSignIn } from '../common/helpers/googlesignin';


const Login = () => {

    const client_id = import.meta.env.VITE_GOOGLE_CLIENT_ID

    return (
        <div>
            <Container className='widget-entry rounded my-4 d-flex align-items-center'>
                <Container className='flex-fill align-items-center'>
                    <h1>Welcome!</h1>
                    <GoogleLogin 
                        onSuccess={res => {console.log(res)}}
                        onError={() => {console.log("Unable to Login")}}       
                    />
                </Container>
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
