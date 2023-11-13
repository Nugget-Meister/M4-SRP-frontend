import React, { useEffect } from 'react';
import { getAllItems, getItem, updateItem} from '../common/helpers/apicalls';
import { Button } from 'react-bootstrap';
const Home = () => {

const test = () => {
    
    const data = {
        "title": "The Greater Gatsby",
        "ISBN": "9780743273565",
        "author": "F.Scott Fitzgerald",
        "genre": "Classic",
        "bookRating": 4.30,
        "hasRead": true,
        "imageURL": "https://m.media-amazon.com/images/I/61Hc2hsbeHL._SY522_.jpg"
    }
    
    // console.log(data)
    updateItem(1, data)
    // getItem(1)
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
