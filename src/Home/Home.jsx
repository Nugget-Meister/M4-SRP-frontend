import React, { useEffect } from 'react';
import { getAllItems, getItem } from '../common/helpers/apicalls';
import { Button } from 'react-bootstrap';
const Home = () => {

const test = () => {
    getItem(1)
    .then(res => console.log(res))
}

    return (
        <div>
            Home Page <br />
            <Button variant='secondary' onClick={() => test()}>Button Tester</Button>
        </div>
    );
}

export default Home;
