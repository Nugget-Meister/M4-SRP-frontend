import React, { useState } from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import Container from 'react-bootstrap/Container';
import { addItem } from '../common/helpers/apicalls';

const ItemForm = () => {
    const navigate = useNavigate()

    const bookTemplate = {
        title: "",
        isbn: "",
        author: "",
        genre: "",
        bookrating: 0,
        hasread: false,
        imageurl: ""
    }

    const [valid, setValid] = useState(false)
    const [book, setBook] = useState({...bookTemplate})

    const handleChange = (e) => {
        setBook({
            ...book,
            [e.target.id]: e.target.value
        })
    }

    const handleChecked = (e) => {
        setBook({
            ...book,
            [e.target.id]: !e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(book)
        addItem(book)
        .then(res => console.log(res))
        
    }
    
    return (
        <Form onSubmit={handleSubmit}>
            <Row className='mb-3'>
                <Form.Group as={Col} >
                    <Form.Label>Book Title</Form.Label>
                    <Form.Control 
                        id="title"
                        value={book.title}
                        onChange={handleChange}
                        required
                        placeholder='Enter Title'/>
                </Form.Group>
                <Form.Group as={Col} >
                    <Form.Label>Book Rating</Form.Label>
                    <Form.Control
                        id='bookrating'
                        type='number'
                        value={book.bookrating}
                        onChange={handleChange} 
                        step={0.01}
                        min="0" max="5"
                        required
                        placeholder='Enter Rating'/>
                </Form.Group>
            </Row>
            <Row className='mb-1'>
            <Form.Group as={Col} >
                    <Form.Label>Book Author</Form.Label>
                    <Form.Control 
                        id="author"
                        value={book.author}
                        onChange={handleChange}
                        required
                        placeholder='Enter Author'/>
            </Form.Group>
            <Form.Group as={Col} >
                    <Form.Label>ISBN</Form.Label>
                    <Form.Control 
                        id="isbn"
                        value={book.isbn}
                        onChange={handleChange}
                        minLength="13"
                        maxLength="13"
                        required
                        placeholder='Enter ISBN'/>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} >
                    <Form.Label>Genre</Form.Label>
                    <Form.Control 
                        id="genre"
                        value={book.genre}
                        onChange={handleChange}
                        required
                        placeholder='Enter Genre'/>
                </Form.Group>
                <Form.Group as={Col} >
                    <Form.Label>Image</Form.Label>
                    <Form.Control 
                        id="imageurl"
                        value={book.imageurl}
                        onChange={handleChange}
                        required
                        placeholder='Enter URL of image'/>
                </Form.Group>
            </Row>
                <Container className='px-4'>
                    <Form.Label>Read?</Form.Label>
                    <Form.Check
                            id='hasread'
                            className='p-4'
                            inline
                        />
                </Container>
        
            <Button 
                className='mx-2'
                type="submit">
                    Submit
            </Button>
            <Button 
                className='mx-2'
                type="reset">
                    Clear
            </Button>

        </Form>
    );
}

export default ItemForm;
