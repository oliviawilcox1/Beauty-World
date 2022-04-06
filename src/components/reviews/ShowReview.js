import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import EditToyModal from './EditToyModal'
import { removeReview } from '../../api/reviews'

const ShowReview = (props) => {
    // most of these are simply to pass to edit modal
    const {review, product, user, triggerRefresh, msgAlert} = props

    const [showEditModal, setShowEditModal] = useState(false)

    const setBgCondition = (cond) => {
        if (cond === 'new') {
            return {width: '18rem', backgroundColor:'#b5ead7'}
        } else if (cond === 'used') {
            return {width: '18rem', backgroundColor:'#ffdac1'}
        } else {
            return {width: '18rem', backgroundColor:'#ff9aa2'}
        }
    }

    const destroyReview = () => {
        removeReview(user, product._id, review._id)
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

    // still working on this

    console.log(setBgCondition(toy.condition))
    
    return (
        <>
            <Card className="m-2" style={setBgCondition(toy.condition)}>
                <Card.Header>{toy.name}</Card.Header>
                <Card.Body>
                    <small>{toy.description}</small><br/>
                    <small>
                        {toy.isSqueaky ? 'squeak squeak' : 'stoic silence'}
                    </small><br/>
                    <Card.Footer >
                        <small>Condition: {toy.condition}</small>
                    </Card.Footer>
                    {
                        user && (user.id === pet.owner.id) 
                        ?
                            <>
                                <Button variant="warning" onClick={() => setShowEditModal(true)}>
                                    Edit Toy
                                </Button>
                                <Button onClick={() => destroyToy()}variant="danger">
                                    Delete Toy
                                </Button>
                            </>
                        :
                        null
                    }
                </Card.Body>
            </Card>
            <EditToyModal 
                user={user}
                pet={pet}
                toy={toy}
                show={showEditModal}
                handleClose={() => setShowEditModal(false)}
                msgAlert={msgAlert}
                triggerRefresh={triggerRefresh}
            />
        </>
    )
}

export default ShowReview
