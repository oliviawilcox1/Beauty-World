import React, { useState, useEffect } from 'react';
import {
  getOneProduct,
  updateProduct,
  removeProduct,
} from '../../api/products';
import { createFavorite, getAllFavorites } from '../../api/favorites';
import { useParams, useNavigate } from 'react-router-dom';
import EditProductModal from './EditProductModal';

const cardContainerLayout = {
  display: 'flex',
  justifyContent: 'center',
  flexFlow: 'row wrap',
};

const ShowProduct = (props) => {
  const [product, setProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [updated, setUpdated] = useState(false);
  let hidden
  // const [favoriteArray, setFavoriteArray]  = useState([])
  const { user, msgAlert } = props;
  const { id } = useParams();
  const navigate = useNavigate();
  console.log('id in showProduct', id);
  useEffect(() => {
    getOneProduct(id)
      .then((res) => setProduct(res.data.product))
      .then(() => {
        msgAlert({
          heading: 'Here is the product!',
          variant: 'success',
        });
      })
      .catch(() => {
        msgAlert({
          heading: 'No product found',
          variant: 'danger',
        });
      });
  }, [updated]);
  
  const isFavorite = () => {
    let faveArray = []
    getAllFavorites()
      .then(res => {
          console.log('this is the favoritesArray', res.data.favorites)
          // setFavoriteArray(res.data.favorites)
          faveArray = res.data.favorites
          return faveArray
        })
      .then(faveArray => {
        for( const i in faveArray ) {
          console.log('favorite product id', faveArray[i].product._id)
          console.log('Show product id', id)
          if ((faveArray[i].product._id) === id) {
            console.log('Do not display favorite button')
            return hidden = 'hidden'
          } 
        } return hidden = 'display'
      })  
  }

  const removeTheProduct = () => {
    removeProduct(user, product._id)
      .then(() => {
        msgAlert({
          heading: 'product politely removed!',
          message: "they're gone",
          variant: 'success',
        });
      })
      .then(() => {
        navigate(`/`);
      })
      .catch(() => {
        msgAlert({
          heading: 'something went wrong',
          message: 'that aint it',
          variant: 'danger',
        });
      });
  };

  const addFavorite = () => {
    const favorite = {
        owner: user._id,
        product: product._id
    }
    console.log('FAVORITE: ', favorite)
      createFavorite(user, favorite)
        .then(() => {
          msgAlert({
            heading: 'Favorite',
            message: "Added to Favorites!",
            variant: 'success',
          });
        })
        .then(() => {
          navigate(`/products/${product._id}`);
        })
      .catch(() => {
        msgAlert({
          heading: 'something went wrong',
          message: 'that aint it',
          variant: 'danger',
        });
      }); 
  }

 
  //let reviews

  if (!product) {
    return <span>Loading...</span>;
  }
  // console.log('USER', user)
  // console.log('PRODUCT', product)

  // let hidden
  console.log(isFavorite())
  // if (isFavorite()) {
  //   console.log('button should be hidden')
  //   hidden = 'none'
  // } else {
  //   console.log('Favorite should be visible')
  //   hidden = 'visible'
  // }



  try{
            // check to see if there is a user signed in and if the product has an owner
            if(user && product.owner._id){
              // check to see if the user id matches the product owner's ID & display conditional 'edit' and 'delete' buttons
              if (user._id === product.owner._id){
                return (
                  <>
                    <h1>{product.name}</h1>
                    <img
                      src={`${product.image}`}
                      alt=""
                      style={{ height: '200px' }}
                      class="img-thumbnail"
                    />
                    <p>Description: {product.description}</p>
                    <p>Price: {product.price}</p>
                    <p>Category: {product.category}</p>
                    <small>Available: {product.available ? 'yes' : 'no'}</small>
                    <button onClick={() => removeTheProduct()}>Delete Product</button>
                    <button onClick={() => setModalOpen(true)}>Edit Product</button>
                    <button style={{visibility: hidden}} onClick={() => addFavorite()}>Add to Favorites</button>  
                    <EditProductModal
                      product={product}
                      show={modalOpen}
                      user={user}
                      msgAlert={msgAlert}
                      triggerRefresh={() => setUpdated((prev) => !prev)}
                      updateProduct={updateProduct}
                      handleClose={() => setModalOpen(false)}
                    />
                  </>
                )
              }
            }
  } catch(error){
    console.log('ERROR:', error)
  }

  if(user){
    return (
      <>
        <h1>{product.name}</h1>
        <img
          src={`${product.image}`}
          alt=""
          style={{ height: '200px' }}
          class="img-thumbnail"
        />
        <p>Description: {product.description}</p>
        <p>Price: {product.price}</p>
        <p>Category: {product.category}</p>
        <small>Available: {product.available ? 'yes' : 'no'}</small>
        <button style={{visibility: hidden}} onClick={() => addFavorite()}>Add to Favorites</button>  
        <EditProductModal
          product={product}
          show={modalOpen}
          user={user}
          msgAlert={msgAlert}
          triggerRefresh={() => setUpdated((prev) => !prev)}
          updateProduct={updateProduct}
          handleClose={() => setModalOpen(false)}
        />
      </>
    )

  }





    return (
      <>
        <h1>{product.name}</h1>
        <img
          src={`${product.image}`}
          alt=""
          style={{ height: '200px' }}
          class="img-thumbnail"
        />
        <p>Description: {product.description}</p>
        <p>Price: {product.price}</p>
        <p>Category: {product.category}</p>
        <small>Available: {product.available ? 'yes' : 'no'}</small>
        <EditProductModal
          product={product}
          show={modalOpen}
          user={user}
          msgAlert={msgAlert}
          triggerRefresh={() => setUpdated((prev) => !prev)}
          updateProduct={updateProduct}
          handleClose={() => setModalOpen(false)}
        />
      </>
    );
  };


export default ShowProduct;
