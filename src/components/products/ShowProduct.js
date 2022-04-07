import React, { useState, useEffect } from 'react';
import {
  getOneProduct,
  updateProduct,
  removeProduct,
} from '../../api/products';
import { createFavorite, getAllFavorites } from '../../api/favorites';
import { Spinner, Container, Card, Button } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom';
import EditProductModal from './EditProductModal';
import ShowReview from '../reviews/ShowReview'
import CreateReviewModal from '../reviews/CreateReviewModal';

const cardContainerLayout = {
  display: 'flex',
  justifyContent: 'center',
  flexFlow: 'row wrap',
};

const ShowProduct = (props) => {
  const [product, setProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [reviewModalOpen, setReviewModalOpen] = useState(false)
  const [updated, setUpdated] = useState(false);
  const [hidden, setHidden] = useState(false)
  // const [favoriteArray, setFavoriteArray]  = useState([])
  const { user, msgAlert } = props;
  const { id } = useParams();
  const navigate = useNavigate();
  // console.log('id in showProduct', product._id);
  useEffect(() => {
    getOneProduct(id)
      .then((res) => {
        setProduct(res.data.product)
        console.log(res.data.product)
        isFavorite()
      })
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
        // Itterating through faveArray but we're going through the entire thing and ending on the last item in array
        // whether or not something ends up equaling the Id if the last item in the array does not equal the array,
        // set hidden will be set equal to false
        // consider writing a filter function that returns it true or false
        // set hidden to the value that is return to the 'variable is fave'
        // const isFave = faveArray.filter((product) => {
        //   product 
        // })

        for( const i in faveArray ) {
          console.log('favorite product id', typeof faveArray[i].product._id)
          console.log('Show product id', typeof id)
          if (faveArray[i].product._id == id) {
            console.log('Do not display favorite button')
            setHidden(true)
          } else {
            console.log('Display Favorite button')
            setHidden(false)
          }
        } 
      })  
      .catch(error => console.error)
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

  let reviewCards = null;

  if (product) {
      if (product.reviews.length > 0) {
          reviewCards = product.reviews.map(review => (
           
              // need to pass all props needed for updateToy func in edit modal
              <ShowReview 
                  key={review._id} review={review} product={product} 
                  user={user} msgAlert={msgAlert}
                  triggerRefresh={() => setUpdated(prev => !prev)}
              />
          ))
          console.log('review', reviewCards)
      }
  }


 
  //let reviews

  if (!product) {
    return <span>Loading...</span>;
  }
  // console.log('USER', user)
  // console.log('PRODUCT', product)

  // let hidden
  // console.log(isFavorite())
  // if (isFavorite()) {
  //   console.log('button should be hidden')
  //   hidden = 'none'
  // } else {
  //   console.log('Favorite should be visible')
  //   hidden = 'visible'
  // }



  try{
  
  const productOwnerId = product
  console.log('Product Owner Id', productOwnerId)
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
                    <button style={{visibility: hidden ? 'hidden' : 'visible' }} onClick={() => addFavorite()}>Add to Favorites</button>  
                    <button onClick={() => setReviewModalOpen(true)}>Give a Product Review?</button>
             
                     <p> {reviewCards}</p> 
                 
                    <EditProductModal
                      product={product}
                      show={modalOpen}
                      user={user}
                      msgAlert={msgAlert}
                      // triggerRefresh={() => setUpdated((prev) => !prev)}
                      updateProduct={updateProduct}
                      handleClose={() => setModalOpen(false)}
                    />
                    <CreateReviewModal
                    product={product}
                    show={reviewModalOpen}
                    user={user}
                    msgAlert={msgAlert}
                    triggerRefresh={() => setUpdated(prev => !prev)}
                    handleClose={() => setReviewModalOpen(false)}
                    
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
        <button style={{ visibility: hidden ? 'hidden' : 'visible' }} onClick={() => addFavorite()}>Add to Favorites</button> 
        <button onClick={() => setReviewModalOpen(true)}>Give a Product Review?</button> 
        <p> {reviewCards}</p> 
        <EditProductModal
          product={product}
          show={modalOpen}
          user={user}
          msgAlert={msgAlert}
          triggerRefresh={() => setUpdated((prev) => !prev)}
          updateProduct={updateProduct}
          handleClose={() => setModalOpen(false)}
        />
         <CreateReviewModal
          product={product}
          show={reviewModalOpen}
          user={user}
          msgAlert={msgAlert}
          triggerRefresh={() => setUpdated(prev => !prev)}
          handleClose={() => setReviewModalOpen(false)}
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
        <button onClick={() => setReviewModalOpen(true)}>Give a Product Review?</button>
        <p> {reviewCards}</p> 
        <EditProductModal
          product={product}
          show={modalOpen}
          user={user}
          msgAlert={msgAlert}
          triggerRefresh={() => setUpdated((prev) => !prev)}
          updateProduct={updateProduct}
          handleClose={() => setModalOpen(false)}
        />
         <CreateReviewModal
          product={product}
          show={reviewModalOpen}
          user={user}
          msgAlert={msgAlert}
          triggerRefresh={() => setUpdated(prev => !prev)}
          handleClose={() => setReviewModalOpen(false)}
          />
      </>
    );
  };


export default ShowProduct;
