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




    return (
    <>
            <div class="review">
                <div class="left">
                    Owner: <span>{review.owner}</span>
                    Rating: <span>{review.rating}</span>
                </div>
                <div class="right">
                {review.review}
                {/* <span>...Read More</span> */}
            </div>
                {
                    user && (user._id === review.owner) ?
                        <>
                            <button class="button-51" variant="warning" onClick={() => setShowEditModal(true)}>
                                Edit Review
                            </button>
                            <button class="button-51"  onClick={() => destroyReview()}variant="danger">
                                Delete Review
                            </button>
                        </>
                    : null
                }
       
        <EditReviewModal 
            user={user}
            product={product}
            review={review}
            show={showEditModal}
            handleClose={() => setShowEditModal(false)}
            msgAlert={msgAlert}
            triggerRefresh={triggerRefresh}
        />
     </div>
    </>
    )
}

export default ShowReviewModal
