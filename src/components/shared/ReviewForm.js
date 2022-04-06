import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'

const ReviewForm = (props) => {
    
    const { review, handleChange, handleSubmit, heading} = props

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Label>Description</Form.Label>
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
                {/* <Form.Select aria-label="toy condition" name="condition" defaultValue={toy.condition} onChange={handleChange}>
                    <option>Open this select menu</option>
                    <option value="new">new</option>
                    <option value="used">used</option>
                    <option value="disgusting">disgusting</option>
                </Form.Select> */}
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    )
}

export default ReviewForm