import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemForm from './ItemForm';
import { getItem } from '../common/helpers/apicalls';

const EditItem = () => {
    const {id} = useParams()
    const [data, setData] = useState({})

    useEffect(() => {
        getItem(id)
        .then(res => setData(res))
    },[])

    // console.log(data)
    return (
        <div className='EditItem'>
            <h1
                className='font-imfellfc'
                >Edit - "{data.title}"</h1>
            <ItemForm data={data}/>
        </div>
    );
}

export default EditItem;
