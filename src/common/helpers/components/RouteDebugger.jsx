import React from 'react';
import { Button } from 'react-bootstrap';
import { addItem, deleteItem, getAllItems, getItem, updateItem} from '../../../common/helpers/apicalls';


const RouteDebugger = () => {

    const data = {
        "title": "The BingusBongus",
        "ISBN": "2780743273565",
        "author": "21 Savage",
        "genre": "New Blood",
        "bookRating": 4.68,
        "hasRead": false,
        "imageURL": "https://m.media-amazon.com/images/I/61Hc2hsbeHL._SY522_.jpg"
    }

    const wrapper = (command, keys) => {
        // console.log(...keys)
        if (keys){   
            command(...keys)
            .then(res => console.log(res))
        } else {
            command()
            .then(res => console.log(res))
        }
    }

    const test = () => {
        // console.log(data)
        // updateItem(1, data)
        // getAllItems()
        // getItem(1)
        // addItem(data)
        // deleteItem(27)
    }

    return (
        <div>
            <Button 
                variant='outline-primary' 
                className='m-2'
                onClick={() => wrapper(getAllItems)}
            >Get All Items</Button>
            <Button 
                variant='primary'
                className='m-2'
                onClick={() => wrapper(getItem, [1])}
            >Get Item</Button>
            <Button 
                variant='success'
                className='m-2'
                onClick={() => wrapper(addItem, data)}
            >Add item</Button>
            <Button 
                variant='warning'
                className='m-2'
                onClick={() => wrapper(updateItem, [1, data])}
            >Update Item</Button>
            <Button 
                variant='outline-danger'
                className='m-2'
                onClick={() => wrapper(updateItem, [1, data])}
            >Delete Item</Button>
            


        </div>
    );
}

export default RouteDebugger;
