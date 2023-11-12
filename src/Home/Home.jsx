import React, { useEffect } from 'react';
import { getAllItems } from '../common/helpers/apicalls';

const Home = () => {

    useEffect(() => {
        getAllItems()
        .then(res => console.log(res))
    }, [])
    return (
        <div>
            Home Page
        </div>
    );
}

export default Home;
