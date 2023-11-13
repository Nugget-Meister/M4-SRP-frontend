import React, { useEffect } from 'react';
import { addItem, deleteItem, getAllItems, getItem, updateItem} from '../common/helpers/apicalls';
import { Button } from 'react-bootstrap';
const Home = () => {

const test = () => {
    
    const data = {
        "title": "The BingusBongus",
        "ISBN": "2780743273565",
        "author": "21 Savage",
        "genre": "New Blood",
        "bookRating": 4.68,
        "hasRead": false,
        "imageURL": "https://m.media-amazon.com/images/I/61Hc2hsbeHL._SY522_.jpg"
    }
    
    // console.log(data)
    // updateItem(1, data)
    // getAllItems()
    // getItem(1)
    // addItem(data)
    // deleteItem(27)
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
