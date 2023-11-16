import React from 'react';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router';
import { Container } from 'react-bootstrap';

const ListEntry = ({ entry }) => {
    const navigate = useNavigate();


    return (
        <>
            <Container
                className='ListEntry align-items-center bg-table-gray d-flex p-0 rounded-4'
                style={{ cursor: 'pointer' }} 
                onClick={() => navigate(`/${entry.id}`)}
            >
                <div className="">
                    <Card 
                        variant="top" 
                        className="p-0 card-w-img" 
                        // style={{ width: '10rem', height: '5rem', overflow: 'hidden' }}
                        >
                        <Card.Img src={entry.imageurl} alt={entry.title} />
                    </Card>
                </div>
                <div className='entry-text d-flex flex-fill px-5 fs-5'>
                        <span className='font-inter'>{entry.title}</span>
                </div>
                <div className="px-4 font-inter italic">
                    {entry.hasread ? window.innerWidth < 400 ? 'X' :'Read' : null}
                </div>
            </Container>
            {/* <tr
                style={{ cursor: 'pointer' }} 
                onClick={() => navigate(`/${entry.id}`)}
                className='ListEntry align-middle bg-table-gray'
            >
                <td width="10rem" className="px-0 py-2">
                    <Card variant="top" className="p-0" style={{ width: '10rem', height: '5rem', overflow: 'hidden' }}>
                        <Card.Img src={entry.imageurl} alt={entry.title} />
                    </Card>
                </td>
                <td>
                    <div className='d-flex flex-fill justify-content-start px-4 fs-5'>
                        <span className='font-inter'>{entry.title}</span>
                    </div>
                </td>
                <td className="fs-6">{entry.hasread ? 'Read' : null}</td>
            </tr> */}
        </>
    );
};

export default ListEntry;
