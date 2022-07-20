import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import ProductForm from '../shared/ProductForm';

const EditProductModal = (props) => {
  const { user, show, handleClose, updateProduct, msgAlert, triggerRefresh } = props;
  const [product, setProduct] = useState(props.product);
  const handleChange = (e) => {
    e.persist();
    setProduct((prevProduct) => {
      const key = e.target.name;
      let value = e.target.value;
      if (e.target.type === 'number') {
        value = parseInt(e.target.value);
      }
      const updatedValue = { [key]: value };
      return { ...prevProduct, ...updatedValue };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(user, product)
      .then(() => handleClose())
      .then(() => triggerRefresh())
      .catch(() =>
        msgAlert({
          heading: 'Oh No!',
          message: 'that aint it',
          variant: 'danger',
        })
      );
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <ProductForm
          product={product}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          heading="Edit Product!"
        />
      </Modal.Body>
    </Modal>
  );
};

export default EditProductModal;
