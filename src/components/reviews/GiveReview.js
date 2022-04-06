import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'
import ReviewForm from '../shared/ReviewForm'
import { giveReview } from '../../api/reviews.js'

const GiveReviewModal = (props) => {
    const { user, product, show, handleClose, msgAlert, triggerRefresh } = props
    const [review, setReview] = useState({})

    const handleChange = (e) => {
        // e === event
        e.persist()

        setReview(prevReview => {
            const name = e.target.name
            let value = e.target.value
            console.log('etarget type', e.target.type)
            console.log('this is e.target checked', e.target.checked)
            // if(name === "isSqueaky" && e.target.checked){
            //     value = true
            // } else if (name === "isSqueaky" && !e.target.checked){
            //     value = false
            // }

            if (e.target.type === 'number') {
                value = parseInt(e.target.value)
            }

            const updatedValue = { [name]: value }

            console.log('prevReview', prevReview)
            console.log('updatedValue', updatedValue)

            return {...prevReview, ...updatedValue}
        })
    }

    const handleSubmit = (e) => {
        // e === event
        e.preventDefault()

        console.log('the toy to submit', review)
        giveReview(user, product.id, review)
            // if create is successful, we should navigate to the show page
            .then(() => handleClose())
            // then we send a success message
            .then(() =>
                msgAlert({
                    heading: 'Toy given to pet!',
                    message: 'great! the pet loves it!',
                    variant: 'success',
                }))
            .then(() => triggerRefresh())
            // if there is an error, we'll send an error message
            .catch(() =>
                msgAlert({
                    heading: 'Oh No!',
                    message: 'that aint it',
                    variant: 'danger',
                }))
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
    )
}

export default GiveReviewModal