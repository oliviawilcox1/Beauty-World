import React, { useState, useEffect } from 'react';
import { getOneProduct, updateProduct, removeProduct,} from '../../api/products';
import { createFavorite, getAllFavorites } from '../../api/favorites';
import { useParams, useNavigate } from 'react-router-dom';
import EditProductModal from './EditProductModal';
import ShowReview from '../reviews/ShowReview'
import CreateReviewModal from '../reviews/CreateReviewModal';
import ShowDescription from './ShowDescription'
import ShowIngredients from './ShowIngredients';


const ShowProduct = (props) => {
  const [product, setProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [reviewModalOpen, setReviewModalOpen] = useState(false)
  const [updated, setUpdated] = useState(false);
  const [hidden, setHidden] = useState(false)
  const [isShown, setIsShown] = useState(false);
  const [description, setDescription] = useState(false);
  // const [ingredients, setIngredients] = useState(unchecked);
  const [instructions, setInstructions] = useState(false);
  const { user, msgAlert } = props;
  const { id } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    getOneProduct(id)
      .then((res) => {
        console.log(res.data.product)
        setProduct(res.data.product)
        isFavorite()
      })
      .catch(error => console.log(error))
  }, [updated]);
  


const isFavorite = () => {
  let faveArray = []
    getAllFavorites()
      .then(res => {
          faveArray = res.data.favorites
          return faveArray
        })
      .then(faveArray => {
        for (const i in faveArray) {
          if (faveArray[i].product._id == id) {
            return setHidden(true) 
          } else {
            setHidden(false)
          }
        } 
      })  
      .catch(error => console.log(error))
}



const removeTheProduct = () => {
  removeProduct(user, product._id)
    .then(() => {
      navigate(`/`);
    })
    .catch(error => console.log(error))
};



const addFavorite = () => {
  const favorite = {
      owner: user._id,
      product: product._id
  }
    createFavorite(user, favorite)
      .then(() => {
        setUpdated(prev => !prev)
        navigate(`/products/${product._id}`); 
      })
    .catch(error => console.log(error))
  }

const handleDescription = event => {
  setDescription(current => !current);
};
  
// const handleIngredients = event => {
//   setIngredients(current => !current);
// };



let reviewCards = null;
if (product) 
  {
  if (product.reviews.length > 0) 
    {
      reviewCards = product.reviews.map(review => (
          <ShowReview
              key={review._id} review={review} product={product} 
              user={user} msgAlert={msgAlert}
              triggerRefresh={() => setUpdated(prev => !prev)}
          />
      ))
  }
}


if (!product) {
  return <span>Loading...</span>;
}


try{
  const productOwnerId = product
    if(user && product.owner._id)
    {
      if (user._id === product.owner._id)
      {
        return (

        <>  
       





            <button  class="button-51" role="button" style={{ borderRadius:'30px'}} onClick={() => removeTheProduct()}>Delete Product</button>
            <button  class="button-51" role="button" style={{ borderRadius:'30px'}} onClick={() => setModalOpen(true)}>Edit Product</button>
            <button  class="button-51" role="button" onClick={() => setReviewModalOpen(true)}>Give a Product Review?</button>
            <button  class="button-51" role="button" style={{ borderRadius:'30px', display: hidden ? 'none' : 'block'}} onClick={() => addFavorite()}>Add to Favorites</button>              
            <p> {reviewCards}</p> 
          
          <EditProductModal
            product={product}
            show={modalOpen}
            user={user}
            msgAlert={msgAlert}
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
} catch (error) {
    console.log('ERROR:', error)
  }



if(user) 
  {
    return (
      <body> 

      
        <button style={{ borderRadius:'30px', display: hidden ? 'none' : 'block'}} onClick={() => addFavorite()}>Add to Favorites</button> 
        <button class="button-51" role="button" onClick={() => setReviewModalOpen(true)}>Give a Product Review?</button> 
  
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
      </body>
    )
}





return (
<>
  <div class="wrapper">
    <div class='leftshow'>
      <span>
        {product.category} / {product.name}
      </span>
      <div>
        <img src={`${product.image}`} alt=""  />
      </div>
    </div>

  <div class="rightshow">
    <div class="product-meta">
      <h4 class="product-vendor">
      <a  class="brandname" href="/" >{product.brand}</a>
      </h4>
      <div class="review-stars">
      </div>
      <h5 class="product-name">{product.name}</h5>
      
      <span>${product.price}</span>
    </div>
  <div class='description'>
    <label for="tab1">
      <input id="tab1" type="radio" name='tabs' onClick={handleDescription}/>
      Details
    </label>

    <label for="tab2">
      <input id="tab2" type="radio" name='tabs'  onClick={handleDescription} />
      Ingredients
    </label>

    <label for="tab3">
      <input id="tab3" type="radio" name='tabs'onClick={handleDescription}/>
      How to use
    </label>
  </div>

  {description && (
  <ShowDescription product={product} user ={user}/>
  )} 

  {/* {ingredients === checked && (
    <ShowIngredients product={product} user={user}/>
  )} */}
  </div>
</div>
  
  <div>
    <button class="button-51" role="button" onClick={() => setReviewModalOpen(true)}>Leave A Review!</button>
    <p> {reviewCards}</p> 
  </div>   


{/* <EditProductModal
product={product}
show={modalOpen}
user={user}
msgAlert={msgAlert}
triggerRefresh={() => setUpdated((prev) => !prev)}
updateProduct={updateProduct}
handleClose={() => setModalOpen(false)}
/> */}

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
