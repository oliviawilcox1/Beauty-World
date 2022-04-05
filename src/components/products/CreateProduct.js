import React, { useState } from 'react';
//import { Form, Container, Button } from 'react-bootstrap';
import { createProduct } from '../../api/products';
import {
  createProductSuccess,
  createProductFailure,
} from '../shared/AutoDismissAlert/messages';
import { useNavigate } from 'react-router-dom';
import ProductForm from '../shared/ProductForm';

// create pet renders a form and calls createPet function
// maybe redirect(navigate) to the new pet show page
// props we'll need are user, msgAlert
const CreateProduct = (props) => {
  const { user, msgAlert } = props;
  console.log('user in create', user);
  const navigate = useNavigate();
  // we'll need two states
  const [product, setProduct] = useState({
    name: '',
    image: '',
    description: '',
    price: '',
    available: false,
    category: '',
  });
  console.log('product in create', product);
  const handleChange = (e) => {
    // e === event
    e.persist();

    setProduct((prevProduct) => {
      const key = e.target.name;
      let value = e.target.value;
      console.log('etarget type', e.target.type);
      console.log('this is e.target checked', e.target.checked);
      if (key === 'available' && e.target.checked) {
        value = true;
      } else if (key === 'available' && !e.target.checked) {
        value = false;
      }

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

    createProduct(user, product)
      // if create is successful, we should navigate to the show page
      .then((res) => {
        navigate(`/products/${res.data.product._id}`);
      })
      // then we send a success message
      .then(() =>
        msgAlert({
          heading: 'Product Added! Success!',
          message: createProductSuccess,
          variant: 'success',
        })
      )
      // if there is an error, we'll send an error message
      .catch(() =>
        msgAlert({
          heading: 'Oh No!',
          message: createProductFailure,
          variant: 'danger',
        })
      );
  };

  return (
    <ProductForm
      product={product}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      heading="Add new product!"
    />
  );
};

export default CreateProduct;
