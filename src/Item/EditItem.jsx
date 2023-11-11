import React from 'react';
import { useParams } from 'react-router';

const EditItem = () => {
    const {id} = useParams()

    return (
        <div>
            EditItem {id}
        </div>
    );
}

export default EditItem;
