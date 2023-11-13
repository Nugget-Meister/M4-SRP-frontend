import React, { useEffect, useState } from 'react';
import { addItem, deleteItem, getAllItems, getItem, updateItem} from '../common/helpers/apicalls';
import { Button } from 'react-bootstrap';
import RouteDebugger from '../common/helpers/components/RouteDebugger';
const Home = () => {
    const debug = false
    const [viewMode, setViewMode] = useState("list")
    const [books, updateBooks] = useState([])

    useEffect(() => {
        getAllItems()
        .then(res => updateBooks(res))
        .then(json => console.log(books))
    }, [])

    return (
        <div>
            {/* Home Page <br /> */}
            {debug ? <RouteDebugger/> : null}
            {books.length != 0 ? "": null}
            
        </div>
    );
}

export default Home;
