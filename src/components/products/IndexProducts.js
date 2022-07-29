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

    let brand
    if (products.length > 0) {
        brand = products.map(name => (
            <div key={name.id} style={linkStyle}>
                <a href={`products/${name._id}`}  user={user} className = "links"> 
                    <span>{name.brand}</span></a> 
            </div>
        ))
    }

    return(
        <>
        
        <div className="container">
            <h2 className="filter">Top 2022 Beauty Picks</h2>
        </div>

        <div className="together">
            <a className= "links" href="/products/price"><h4 className='button-51'> Newly Added </h4></a>
            <a className= "links" href="/products/fragrance"> <h4 className='button-51'> Heavenly Scents </h4></a>
            <a className= "links" href="/products/price"><h4 className='button-51'> Under $20 </h4></a>
            <a className= "links" href="/products/kbeauty"> <h4 className='button-51'> Best of K-Beauty </h4></a>
        </div>

        <div className='wrap'>
            <div className='stack'>
                <h3 className='filterby'>Filter By</h3>
                <a className="links" href="/products/bodycare"><span>Bodycare</span></a><br/>
                <a className="links" href="/products/fragrance"><span>Fragrance</span></a><br/>
                <a className="links" href="/products/haircare"><span>Haircare</span></a><br/>
                <a className="links" href="/products/makeup"><span>Makeup</span></a><br/>
                <a className="links" href="/products/skincare"><span>Skincare</span></a><br/>

                <h3 className='filterby'>Shop by Brand</h3>
                    {brand}

                <h3 className='filterby'>Shop by Product Type</h3>
                    <a className="links" href="/products/bodycare"><span>Cleanser </span></a><br/>
                    <a className="links" href="/products/bodycare"><span>Toner/Essence </span></a><br/>
                    <a className="links" href="/products/bodycare"><span>Serum </span></a><br/>
                    <a className="links" href="/products/bodycare"><span>Moisturizer </span></a><br/>
                    <a className="links" href="/products/bodycare"><span>Sunscreen </span></a><br/>

                    <a className="links" href="/products/bodycare"><span>Body Wash </span></a><br/>
                    <a className="links" href="/products/bodycare"><span>Bath Products </span></a><br/>
                    <a className="links" href="/products/bodycare"><span>Body Exfoliants</span></a><br/>
                    <a className="links" href="/products/bodycare"><span>Body Lotion</span></a><br/>
                    <a className="links" href="/products/bodycare"><span>Body Oils</span></a><br/>

                    <a className="links" href="/products/bodycare"><span>Shampoo</span></a><br/>
                    <a className="links" href="/products/bodycare"><span>Conditioner</span></a><br/>
                    <a className="links" href="/products/bodycare"><span>Leave-In Products</span></a><br/>
                    <a className="links" href="/products/bodycare"><span>Masks</span></a><br/>

                    <a className="links" href="/products/bodycare"><span>Eye Products</span></a><br/>
                    <a className="links" href="/products/bodycare"><span>Face Products</span></a><br/>
                    <a className="links" href="/products/bodycare"><span>Cheek Products</span></a><br/>
                    <a className="links" href="/products/bodycare"><span>Lip Products</span></a><br/>
            </div>

            <div className='cards'>
                <div className="index">
                {productCards}
                </div>
            </div>
        </div>
        </>
    )
}

export default IndexProducts

