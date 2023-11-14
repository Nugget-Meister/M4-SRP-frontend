import React from 'react';
import  Image  from 'react-bootstrap/Image';
import  Card  from 'react-bootstrap/Card';
import { useNavigate } from 'react-router';

const ListEntry = ({entry}) => {
    // console.log(entry)

const navigate = useNavigate()


    return (
        <tr 
            className=''
            onClick={() => navigate(`/${entry.id}`)}
            >
            <td width="10rem" className=''>
                     <Card variant="top" className="p-0" 
                     style={{width: "10rem", height:"5rem",overflow: "hidden"}}>
                        <Card.Img src={entry.imageurl}/>
                     </Card>
            </td>
            <td>{entry.title}</td>
            <td className=''>{entry.hasread ? "Read" : null}</td>
        </tr>
    );
}

export default ListEntry;