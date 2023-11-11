import React from 'react';
import { useParams } from 'react-router';

const ItemDetails = () => {

    const {id} = useParams()
     
    return (
        <div>
            ItemDetails
        </div>
    );
}

export default ItemDetails;
