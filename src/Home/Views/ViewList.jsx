import React from 'react';
import ListEntry from './ListEntry';
import Table  from 'react-bootstrap/Table';

const ViewList = ({entries}) => {
    entries = entries || []
    return (
        <div className='ViewList'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {entries.length > 0 ? entries.map((entry) => {
                        return <ListEntry entry={entry} key={entry.id}/>
                    }) : null}
                </tbody>
            </Table>
        </div>
    );
}

export default ViewList;
