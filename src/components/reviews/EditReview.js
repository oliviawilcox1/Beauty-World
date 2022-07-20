import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import ReviewForm from '../shared/ReviewForm';
import { updateReview } from '../../api/reviews.js';

const EditReviewModal = (props) => {
  const { user, product, show, handleClose, msgAlert, triggerRefresh } = props;
  const [review, setReview] = useState(props.review);
  const handleChange = (e) => {
    e.persist()
    setReview((prevReview) => {
      const name = e.target.name;
      let value = e.target.value;
      if (e.target.type === 'number') {
          value = parseInt(e.target.value)
      }
      const updatedValue = { [name]: value }
      return { ...prevReview, ...updatedValue };
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault()
    updateReview(user, product._id, review._id, review)
      .then(() => handleClose())
      .then(() => triggerRefresh())
      .catch(error => console.log(error))
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <ReviewForm
          review={review}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          heading="Give a product a review!"
        />
      </Modal.Body>
    </Modal>
  );
};

export default EditReviewModal;
