import React from 'react';
import ListEntry from './ListEntry';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';

const ViewList = ({ entries, onItemClick }) => {
    entries = entries || [];

    return (
        <div className='ViewList m-3'>
            <div>
                <h1 className='font-imfellfc'>Current Shelf</h1>
            </div>
            <Container
                className=''
            >
                    {entries.length > 0
                        ? entries.map((entry) => (
                              <ListEntry
                                  entry={entry}
                                  key={entry.id}
                                  onItemClick={onItemClick}
                              />
                          ))
                        : null}
            </Container>
        </div>
    );
};

export default ViewList;
