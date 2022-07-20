import React, { useState } from 'react';
import { createProduct } from '../../api/products';
import { createProductSuccess, createProductFailure,} from '../shared/AutoDismissAlert/messages';
import { useNavigate } from 'react-router-dom';
import ProductForm from '../shared/ProductForm';


const CreateProduct = (props) => {
  const { user, msgAlert } = props;
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '', image: '', description: '', price: '', available: false, category: '',
  });
  const handleChange = (e) => {
    e.persist();
    setProduct((prevProduct) => {
      const key = e.target.name;
      let value = e.target.value;
      if (key === 'available' && e.target.checked) {
        value = true;
      } else if (key === 'available' && !e.target.checked) {
        value = false;
      }
      if (e.target.type === 'number') {
        value = parseInt(e.target.value);
      }
      const updatedValue = { [key]: value };
      return { ...prevProduct, ...updatedValue };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(user, product)
      .then((res) => {
        navigate(`/products/${res.data.product._id}`);
      })
      .catch(() => msgAlert({ 
        heading: 'Oh No!', message: createProductFailure, variant: 'danger', 
      }))
  };


  return (
    <ProductForm
      product={product}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      heading="Add A New Product"
    />
  );
};

export default CreateProduct;
