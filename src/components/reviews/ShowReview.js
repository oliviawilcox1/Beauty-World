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
        console.log('DESTROYING REVIEW')
        console.log('PRODUCT: ', product._id)
        console.log('REVIEW: ', review._id)
        deleteReview(user, product._id, review._id)
            .then(() =>
                msgAlert({
                    heading: 'Review Deleted!',
                    message: 'Thank you for your input.',
                    variant: 'success',
                }))
            .then(() => triggerRefresh())
            // if there is an error, we'll send an error message
            .catch((error) =>
                console.log('ERROR IS: ', error)
            //     msgAlert({
            //         heading: 'Oh No!',
            //         message: error,
            //         variant: 'danger',
            // })
            )
    }

// there is an error being thrown below when it is trying to call product.owner.id on seed data without an owner...
// below will account for this error
// let productOwnerId = false
// try {
//     if (product.owner._id) productOwnerId = product.owner._id
// }
// catch (error) {console.log(error)}

    // console.log(setBgCondition(toy.condition))
    // style={setBgCondition(review.owner)}
    console.log ('REVIEW REVIEW REVIEW: ', review)
    return (
        <>
            <Card className="m-2">
                <Card.Header>{review.rating}</Card.Header>
                <Card.Body>
                    <small>{review.review}</small><br/>
                    {
                        user && (user._id === review.owner) 
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
