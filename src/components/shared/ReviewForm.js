import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'

const ReviewForm = (props) => {
    
    const { user, review, handleChange, handleSubmit, heading} = props
    console.log('USER', user)

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Control 
                    placeholder="Enter your review!"
                    value={review.review}
                    name='review'
                    onChange={handleChange}
                />
                <Form.Label>Rating</Form.Label>
                <Form.Control 
                    placeholder="Rate from 0-5"
                    value={review.rating}
                    name='rating'
                    onChange={handleChange}
                />
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    )
}

export default ReviewForm