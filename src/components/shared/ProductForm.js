import React, { useState } from 'react';
import { Form, Container, Button } from 'react-bootstrap';

const ProductForm = (props) => {
  const { product, handleChange, handleSubmit, heading } = props;

  return (
    <Container className="justify-content-center">
      <h3>{heading}</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Label>Name</Form.Label>
        <Form.Control
          placeholder="name?"
          value={product.name}
          name="name"
          onChange={handleChange}
        />
        <Form.Label>Image</Form.Label>
        <Form.Control
          placeholder="img url?"
          value={product.image}
          name="image"
          onChange={handleChange}
        />
        <Form.Label>Description</Form.Label>
        <Form.Control
          placeholder="description?"
          value={product.description}
          name="description"
          onChange={handleChange}
        />
        <Form.Label>Price</Form.Label>
        <Form.Control
          placeholder="price?"
          value={product.price}
          type="number"
          name="price"
          onChange={handleChange}
        />
        <Form.Check
          label="is this product available?"
          name="available"
          defaultChecked={product.available}
          onChange={handleChange}
        />
        <Form.Label>Category</Form.Label>
        <Form.Control
          placeholder="category?"
          value={product.category}
          name="category"
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default ProductForm;
