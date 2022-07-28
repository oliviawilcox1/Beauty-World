import React, { useState } from 'react';
import { Form, Container, Button } from 'react-bootstrap';

const ProductForm = (props) => {
  const { product, handleChange, handleSubmit, heading } = props;

  return (
    <div className='row'>
    <div className='col-sm-10 col-md-8 mx-auto mt-5'>
      <h4>{heading}</h4>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={product.name}
          name="name"
          onChange={handleChange}
        />

        <input
          
          placeholder="Brand"
          value={product.brand}
          name="brand"
          onChange={handleChange}
        />

        <input
          placeholder="Description"
          value={product.description}
          name="description"
          onChange={handleChange}
        />
    
        <input
          placeholder="Price"
          value={product.price}
          type="number"
          name="price"
          onChange={handleChange}
        />

        <input
          type="checkbox"
          placeholder="KBeauty?"
          name="kbeauty"
          value="kbeauty"
          defaultChecked={product.kbeauty}
          onChange={handleChange}
        />
  
        <input
          placeholder="Category"
          value={product.category}
          name="category"
          onChange={handleChange}
        />
        
        <input
          placeholder="Size"
          value={product.size}
          name="category"
          onChange={handleChange}
        />

        <input
          placeholder="Where to buy"
          value={product.wheretobuy}
          name="category"
          onChange={handleChange}
        />

          <input
          placeholder="Ingredients"
          value={product.ingredients}
          name="category"
          onChange={handleChange}
        />
          <input
          placeholder="Ingredient Highlights"
          value={product.ingredienthighlights}
          name="ingredienthighlights"
          onChange={handleChange}
        />
          <input
          placeholder="Target"
          value={product.target}
          name="target"
          onChange={handleChange}
        />
          <input
          placeholder="Instructions"
          value={product.instructions}
          name="category"
          onChange={handleChange}
        />



        <button className="button-51" type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default ProductForm;
