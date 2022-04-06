import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import ProductForm from '../shared/ProductForm';

const EditProductModal = (props) => {
  const { user, show, handleClose, updateProduct, msgAlert, triggerRefresh } =
    props;
  const [product, setProduct] = useState(props.product);

  const handleChange = (e) => {
    // e === event
    e.persist();

    setProduct((prevProduct) => {
      const key = e.target.name;
      let value = e.target.value;
      console.log('etarget type', e.target.type);
      console.log('this is e.target checked', e.target.checked);

      if (e.target.type === 'number') {
        value = parseInt(e.target.value);
      }
      

      const updatedValue = { [key]: value };

      console.log('prevProduct', prevProduct);
      console.log('updatedValue', updatedValue);

      return { ...prevProduct, ...updatedValue };
    });
  };

  const handleSubmit = (e) => {
    // e === event
    e.preventDefault();

    console.log('the product to submit', product);
    updateProduct(user, product)
      // if create is successful, we should navigate to the show page
      .then(() => handleClose())
      // then we send a success message
      .then(() =>
        msgAlert({
          heading: 'Product Updated! Success!',
          message: 'u did it',
          variant: 'success',
        })
      )
      .then(() => triggerRefresh())
      // if there is an error, we'll send an error message
      .catch(() =>
        msgAlert({
          heading: 'Oh No!',
          message: 'that aint it',
          variant: 'danger',
        })
      );
    console.log('this is the product', product);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <ProductForm
          product={product}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          heading="Edit product!"
        />
      </Modal.Body>
    </Modal>
  );
};

export default EditProductModal;
