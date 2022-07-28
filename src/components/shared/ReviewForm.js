import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'

const ReviewForm = (props) => {
    
    const { user, review, handleChange, handleSubmit, heading} = props
    // console.log('USER', user)

    return (
        <div class="reviewform">
        <form  onSubmit={handleSubmit}>
            <h3 class="desc2">{heading}</h3>
                <input
                    class="review"
                    placeholder="Enter your review!"
                    value={review.review}
                    name='review'
                    onChange={handleChange}
                />
                <label>Rating</label>
                <input
                    class="review"
                    placeholder="Rate from 0-5"
                    value={review.rating}
                    name='rating'
                    onChange={handleChange}
                />
                <button class="button-51" type='submit'>Submit</button>
            </form>
            </div>
    )
}

export default ReviewForm