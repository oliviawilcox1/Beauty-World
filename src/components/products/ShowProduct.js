import React, { useState, useEffect } from 'react';
import { getOneProduct, updateProduct, removeProduct,} from '../../api/products';
import { createFavorite, getAllFavorites } from '../../api/favorites';
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
          <h1>{product.name}</h1>
            <img src={`${product.image}`} alt=""  class="img-thumbnail" />
            <p>Description: {product.description}</p>
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
      <body className='col-lg-10 col-md-8 mx-auto mt-5'> 

        <h1>{product.name}</h1>
          <img src={`${product.image}`} alt="" class="img-thumbnail" />
            <p>Description: {product.description}</p>
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
{/* 


            <section id="content2">
              <div>
                <h4>Ingredients We Love</h4>
                <p>{product.ingredients}</p>

                <div style="display: none;">
                  <a href="" data-show-more>Show Full List of Ingredients</a>
                </div>
                <div style="display: block;">
                  <h4> Full List of Ingredients</h4>
                  <p>

                  </p>
                  <a href="" data-show-less>Show Less</a>
                </div>
              </div>
            </section>
          </div>

        </div>
      </div>
  </div>
  </div>
</section> */}






<div class="wrapper">
<div class='leftshow'>
  <span>
    <h1>{product.name}</h1>
  </span>
  <div>
    <img src={`${product.image}`} alt="" class="img-thumbnail" />
  </div>
</div>

<div class="rightshow">
    <div class="product-meta">
        <h3 class="product-vendor">
          <a href="/" >{product.brand}</a>
        </h3>
        <div class="review-stars">

        </div>
            <h4>{product.name}</h4>
            <span>
              <span>${product.price}</span>
            </span>
    </div>
    <div class='description'>
            <input id="tab1" type="radio" name='tabs'/>
              <label for="tab1">Details</label>
       
            <input id="tab2" type="radio" name='tabs' />
              <label for="tab2">Ingredients</label>
       
            <input id="tab3" type="radio" name='tabs' />
              <label for="tab3">How to use</label>
           </div>
           <section id='content1'>
              <div>
                <p>
                  {product.description}
                </p>
              </div>
            </section>

            <section id="content2">
              <div>
                <h4>Ingredients We Love</h4>
                <p>{product.ingredients}</p>
                <div>
                  <a href="" data-show-more>Show Full List of Ingredients</a>
                </div>
                {/* <div>
                  <h4> Full List of Ingredients</h4>
  
                  <a href="" data-show-less>Show Less</a>
                </div> */}
              </div>
            </section>
</div>
</div>

        <button class="button-51" role="button" onClick={() => setReviewModalOpen(true)}>Leave A Review!</button>
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
