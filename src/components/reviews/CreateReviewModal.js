import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import ReviewForm from '../shared/ReviewForm'
import { createReview } from '../../api/reviews.js'

const CreateReviewModal = (props) => {
    const { user, product, show, handleClose, msgAlert, triggerRefresh } = props
    const [review, setReview] = useState({})
    const handleChange = (e) => {
        e.persist()
        addUsertoReview()
        setReview(prevReview => {
            const name = e.target.name
            let value = e.target.value
            if (e.target.type === 'number') {
                value = parseInt(e.target.value)
            }
            const updatedValue = { [name]: value }
            return {...prevReview, ...updatedValue}
        })
    }

    const addUsertoReview = () => {
        setReview(prevReview => {
            const updatedValue = { "owner": user._id }
            return {...prevReview, ...updatedValue}
            }   
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createReview(user, product._id, review)
            .then(() => handleClose())
            .then(() => triggerRefresh())
            .catch(error => console.log(error))
    }

return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
            <ReviewForm
                review={review}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                heading="Give the product a review!"
            />
        </Modal.Body>
    </Modal>
      
       
            // <ReviewForm
            //     review={review}
            //     handleChange={handleChange}
            //     handleSubmit={handleSubmit}
            //     heading="Give the product a review!"
            // />

)
}

export default CreateReviewModal