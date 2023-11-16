import React, { useEffect, useState } from 'react';
import { addItem, deleteItem, getAllItems, getItem, updateItem} from '../common/helpers/apicalls';
import RouteDebugger from '../common/helpers/components/RouteDebugger.jsx';
import ViewList from './Views/ViewList.jsx';

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
