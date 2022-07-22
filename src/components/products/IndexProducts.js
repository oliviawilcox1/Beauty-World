import React, { useState, useEffect } from 'react'
import { getAllProducts } from '../../api/products'
import { Link } from 'react-router-dom'

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
            <div key = {product.id} class = "indexcards">
                <a href=" {`/products/${product._id}`}"  class = "links"> <h5 class="productname">{product.name}</h5>
                    <img src= {`${product.image}`}  class="imgthumbnail"/> </a> Ingredient Highlights {product.ingredienthighlights}
            </div>
        ))
    }

    return(
        <>
        <h3 class="producttitle">All Of Our Top 2022 Beauty Picks</h3>
            <div class="index">
                {productCards}
            </div>
        </>
    )
}

export default IndexProducts

