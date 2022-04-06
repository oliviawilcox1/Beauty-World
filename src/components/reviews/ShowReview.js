import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import EditReviewModal from './EditReview'
import { deleteReview } from '../../api/reviews.js'

const ShowReviewModal = (props) => {
    // most of these are simply to pass to edit modal
    const {review, product, user, triggerRefresh, msgAlert} = props

    const [showEditModal, setShowEditModal] = useState(false)

    // const setBgCondition = (cond) => {
    //     if (cond === 'new') {
    //         return {width: '18rem', backgroundColor:'#b5ead7'}
    //     } else if (cond === 'used') {
    //         return {width: '18rem', backgroundColor:'#ffdac1'}
    //     } else {
    //         return {width: '18rem', backgroundColor:'#ff9aa2'}
    //     }
    // }

    const destroyReview = () => {
        deleteReview(user, product._id, review._id)
            .then(() =>
                msgAlert({
                    heading: 'Review Added!',
                    message: 'Thank you for your input',
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



    // console.log(setBgCondition(toy.condition))
    // style={setBgCondition(review.owner)}
    return (
        <>
            <Card className="m-2">
                <Card.Header>{review.rating}</Card.Header>
                <Card.Body>
                    <small>{review.review}</small><br/>
                    {
                        user && (user.id === product.owner.id) 
                        ?
                            <>
                                <Button variant="warning" onClick={() => setShowEditModal(true)}>
                                    Edit Review
                                </Button>
                                <Button onClick={() => destroyReview()}variant="danger">
                                    Delete Review
                                </Button>
                            </>
                        :
                        null
                    }
                </Card.Body>
            </Card>
            <EditReviewModal 
                user={user}
                product={product}
                review={review}
                show={showEditModal}
                handleClose={() => setShowEditModal(false)}
                msgAlert={msgAlert}
                triggerRefresh={triggerRefresh}
            />
        </>
    )
}

export default ShowReviewModal
