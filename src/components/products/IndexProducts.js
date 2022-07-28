import React, { useState, useEffect } from 'react'
import { getAllProducts } from '../../api/products'
import { createFavorite, getAllFavorites } from '../../api/favorites';
import { useNavigate } from 'react-router-dom';


const linkStyle = {
    display: "flex",
    justifyContent: "center",
    flexFlow: "row wrap",
}



const IndexProducts = (props) => {
    const [products, setProducts] = useState(null)
    const [updated, setUpdated] = useState(false);
    const { user, msgAlert } = props
    const navigate = useNavigate();

    useEffect(()=> {
        getAllProducts()
            .then(res => {
                console.log('this is the res', res)
                setProducts(res.data.products)
            })
            .catch(error => console.log(error))
        },[])


    // const addFavorite = () => {
    //     const favorite = {
    //         owner: user._id,
    //         product: products._id
    //     }
    //         createFavorite(user, favorite)
    //         .then(() => {
    //             setUpdated(prev => !prev)
    //             navigate(`/products/${products._id}`); 
    //         })
    //         .catch(error => console.log(error))
    //     }

    if (!products) {
        return <h3>loading...</h3>
    } else if (products.length === 0) {
        return <p>No Products Currently. Please Check Back Later!</p>
    }

//     if(user){
//         let productCard
//         if (products.length > 0) {
//             productCard = products.map(product => (
//                 <div key={product.id} style={linkStyle}>
//                     <a href={`products/${product._id}`}  user={user} className = "links"> 
//                         <img src= {`${product.image}`}  className="imgthumbnail"/> <h5 id="brandname">{product.brand}</h5><span class="productname">{product.name}</span></a> 
//                         <button  className="button-51" role="button"  onClick={() => addFavorite()}>Add to Favorites</button> 
//                 </div>
//             ))
//         return(
//             <>
//                 <div class="together">
//                 <h4 class='button-51'> Newly Added </h4>
//                 <h4 class='button-51'> Heavenly Scents </h4>
//                 <h4 class='button-51'> Under $20 </h4>
//                 <h4 class='button-51'> K-Beauty </h4>
//                 </div>
//                 <h1 class="button-52">Top 2022 Beauty Picks</h1>
//                 <div class="index">
//                 {productCard}
//                 </div>
//             </>
//         )
//     }
// }



    let productCards
    if (products.length > 0) {
        productCards = products.map(product => (
            <div key={product.id} style={linkStyle}>
                <a href={`products/${product._id}`}  user={user} className = "links"> 
                    <img src= {`${product.image}`}  className="imgthumbnail"/> <h5 id="brandname">{product.brand}</h5><span className="productname">{product.name}</span></a> 
            </div>
        ))
    }

    return(
        <>
        <div className="together">
            <h4 className='button-51'> Newly Added </h4>
            <h4 className='button-51'> Heavenly Scents </h4>
            <h4 className='button-51'> Under $20 </h4>
            <h4 className='button-51'> K-Beauty </h4>
        </div>
        <h1 className="button-52">Top 2022 Beauty Picks</h1>
            <div className="index">
                {productCards}
            </div>
        </>
    )
}

export default IndexProducts

