import React, { useEffect, useState } from 'react';
import { addItem, deleteItem, getAllItems, getItem, updateItem} from '../common/helpers/apicalls';
import { Button } from 'react-bootstrap';
import RouteDebugger from '../common/helpers/components/RouteDebugger';
import ViewList from './Views/ViewLIst';
import ViewTiles from './Views/ViewTiles';
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
            {viewMode == "list" ? <ViewList entries={books}/> : null}
        </div>
    );
}

export default Home;
