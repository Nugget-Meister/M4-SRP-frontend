import React from 'react';
import  Image  from 'react-bootstrap/Image';
import  Card  from 'react-bootstrap/Card';

const ListEntry = ({entry}) => {
    // console.log(entry)
    return (
        <tr className=''>
            <td width="100px" className=''>
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
