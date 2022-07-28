import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'

const ReviewForm = (props) => {
    
    const { user, review, handleChange, handleSubmit, heading} = props
    // console.log('USER', user)

    return (
        <div className="reviewform">
        <form className="form" onSubmit={handleSubmit}>
            <h4>{heading}</h4>
                <input
                    className='review1'
                    placeholder="Enter your review!"
                    value={review.review}
                    name='review'
                    onChange={handleChange}
                />
                <input
                 className='review1'
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