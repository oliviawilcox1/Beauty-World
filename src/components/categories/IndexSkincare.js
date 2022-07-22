import React, { useState, useEffect } from 'react'
import { getAllProducts } from '../../api/products'
import { Link } from 'react-router-dom'

const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'space-between',
    flexFlow: 'row wrap',
}

const IndexProducts = (props) => {
    const [products, setProducts] = useState(null)
    const { user, msgAlert } = props

    useEffect(()=> {
        getAllProducts()
            .then(res => {
                console.log('this is the res', res)
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
    if (products.length > 0 && products.map(product => ( console.log(product.category) ))) {
       
        productCards = products.map(product => (
        
        <div key = {product.id} style = {{ width: '30%' }} className = "productCards">
               <Link to = {`/products/${product._id}`}  className = "links"> {product.name}
                    <img src = {`${product.image}`}  class='img-thumbnail'/> </Link>
             </div>
        ))
        // productCards = products.map(product => (
      
        //     <div key = {product.id} style = {{ width: '30%' }} className = "productCards">
        //         <Link to = {`/products/${product._id}`}  className = "links"> {product.name}
        //             <img src = {`${product.image}`}  class='img-thumbnail'/> </Link>
        //     </div>
        // ))
    }

        return(
            <>
            <h3>All The Products</h3>
                <div style={cardContainerLayout}>
                    {productCards}
                </div>
            </>
        )
}

export default IndexProducts