import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import EditReviewModal from './EditReview'
import { deleteReview } from '../../api/reviews.js'

const ShowReviewModal = (props) => {
    const {review, product, user, triggerRefresh, msgAlert} = props
    const [showEditModal, setShowEditModal] = useState(false)

    const destroyReview = () => {
        deleteReview(user, product._id, review._id)
            .then(() => triggerRefresh())
            .catch((error) => console.log('ERROR IS: ', error))
    }


    const bodyStyle = {
        backgroundColor: 'white',
        width: "300px",
    }
    const cardHeaderStyle = {
        backgroundColor: 'white',
        width: "300px",
    }

    const cardStyle = {
        width: "300px"
    }


    return (
    <>
        <Card className="m-2" style={cardStyle}>
            <Card.Header style={cardHeaderStyle}> Rating: {review.rating} </Card.Header>
            <Card.Body style = {bodyStyle}>
                <small>{review.review}</small><br/>
                {
                    user && (user._id === review.owner) ?
                        <>
                            <Button variant="warning" onClick={() => setShowEditModal(true)}>
                                Edit Review
                            </Button>
                            <Button onClick={() => destroyReview()}variant="danger">
                                Delete Review
                            </Button>
                        </>
                    : null
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
