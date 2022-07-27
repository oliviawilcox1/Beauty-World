import React, { useState, useEffect } from 'react'
import { getAllProducts } from '../../api/products'
import { Link } from 'react-router-dom'
const linkStyle = {
    display: "flex",
    justifyContent: "center",
    flexFlow: "row wrap",
}



const IndexProducts = (props) => {
    const [products, setProducts] = useState(null)
    const { user, msgAlert } = props

    useEffect(()=> {
        getAllProducts()
            .then(res => {
                console.log('this is the res', res)
                setProducts(res.data.products)
            })
            .catch(error => console.log(error))
        },[])

    if (!products) {
        return <h3>loading...</h3>
    } else if (products.length === 0) {
        return <p>No Products Currently. Please Check Back Later!</p>
    }

    let productCards
    if (products.length > 0) {
        productCards = products.map(product => (
            <div key = {product.id} style={linkStyle}>
                <a href={`products/${product._id}`}  class = "links"> 
                    <img src= {`${product.image}`}  class="imgthumbnail"/> <h5 id="brandname">{product.brand}</h5><span class="productname">{product.name}</span></a> 
            </div>
        ))
    }

    return(
        <>

        <div class="together">
<h4 class='button-51'> Newly Added </h4>
<h4 class='button-51'> Heavenly Scents </h4>
<h4 class='button-51'> Under $20 </h4>
<h4 class='button-51'> K-Beauty </h4>
        </div>


        <h1 class="button-52">Top 2022 Beauty Picks</h1>
            <div class="index">
                {productCards}
            
            </div>
        </>
    )
}

export default IndexProducts

