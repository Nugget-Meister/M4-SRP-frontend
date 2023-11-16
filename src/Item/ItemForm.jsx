import React, { useEffect, useState } from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import Container from 'react-bootstrap/Container';
import { addItem, updateItem } from '../common/helpers/apicalls';

const ItemForm = ({data}) => {
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

    const [book, setBook] = useState({...bookTemplate})

    

    useEffect(()=> {
        data ? setBook({...data}) : null
        // console.log(data)
    },[data])

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

    const handleReset = () => {
        setBook({...bookTemplate})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!data) {
            addItem(book)
            .then(res => {
                if (res.id) {
                    alert(`Successfully added book with id ${res.id}`)
                    navigate(`/${res.id}`)
                } else {
                    alert(`An error has occurred, please try again later. If the issue persists, please contact the repo maintainer.`)
                    throw new Error('An error has occured. Please try again')
                }
            })
            .catch(err => console.error(err))
        } else {
            updateItem(data.id, book)
            .then(res => {
                if (res.status == 200) {
                    alert(`Successfully edited book with id ${data.id}`)
                    navigate(`/${data.id}`)
                } else {
                    console.log(res)
                    alert(`An error has occurred, please try again later. If the issue persists, please contact the repo maintainer.`)
                    throw new Error(`An error has occured. Please try again `)
                }
            })
            .catch(err => console.error(err))
        }
        
    }
    
    return (
        <Form 
            className='ItemForm'
            onSubmit={handleSubmit}>
            <Row className='mb-3'>
                <Form.Group as={Col} >
                    <Form.Label className='navbar-font'>Book Title</Form.Label>
                    <Form.Control 
                        id="title"
                        value={book.title}
                        onChange={handleChange}
                        required
                        placeholder='Enter Title'/>
                </Form.Group>
                <Form.Group as={Col} >
                    <Form.Label className='navbar-font'>Book Rating</Form.Label>
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
                    <Form.Label className='navbar-font'>Book Author</Form.Label>
                    <Form.Control 
                        id="author"
                        value={book.author}
                        onChange={handleChange}
                        required
                        placeholder='Enter Author'/>
            </Form.Group>
            <Form.Group as={Col} >
                    <Form.Label className='navbar-font'>ISBN</Form.Label>
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
                    <Form.Label className='navbar-font'>Genre</Form.Label>
                    <Form.Control 
                        id="genre"
                        value={book.genre}
                        onChange={handleChange}
                        required
                        placeholder='Enter Genre'/>
                </Form.Group>
                <Form.Group as={Col} >
                    <Form.Label className='navbar-font'>Image</Form.Label>
                    <Form.Control 
                        id="imageurl"
                        value={book.imageurl}
                        onChange={handleChange}
                        required
                        placeholder='Enter URL of image'/>
                </Form.Group>
            </Row>
                <Container className='px-4'>
                    <Form.Label className='navbar-font'>Read?</Form.Label>
                    <Form.Check
                            id='hasread'
                            className='p-4'
                            inline
                        />
                </Container>
        
            <Button 
                className='mx-2 navbar-font'
                type="submit">
                    Submit
            </Button>
            <Button 
                className='mx-2'
                type="reset"
                onClick={handleReset}
                >
                    Clear
            </Button>

        </Form>
    );
}

export default ItemForm;
