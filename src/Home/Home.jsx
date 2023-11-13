import React, { useEffect } from 'react';
import { addItem, deleteItem, getAllItems, getItem, updateItem} from '../common/helpers/apicalls';
import { Button } from 'react-bootstrap';
import RouteDebugger from '../common/helpers/components/RouteDebugger';
const Home = () => {
    const debug = false
 



    return (
        <div>
            Home Page <br />
            {debug ? <RouteDebugger/> : null}
            
        </div>
    );
}

export default Home;
