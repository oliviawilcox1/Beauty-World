import React, { useState, useEffect } from 'react'
import { getAllProducts } from '../../api/products'
import { Card } from "react-bootstrap"
import { Link } from 'react-router-dom'


const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'space-between',
    flexFlow: 'row wrap'
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


        // let productCards
        // if(products.length > 0) {

        //    let productsJsx = products.map( product => (
        //         <li>
        //             {product.name}
        //         </li>
        //     ))
        //      productCards = products.map(product => (
        //         // one method of styling usually reserved for a single style we can use inline
        
        //         <Card key ={product._id} style={{ width: '30%'}} className="m-2">
        //             <Card.Header>
        //                 {product.name}
                        
        //             </Card.Header>
        //             <Card.Body>
        //                 <Card.Text>
        //                     {product.description}
        //                     {product.price}
        //                     {/* <Link to={`/pets/${pet.id}`}> View {pet.name}</Link> */}
        //                 </Card.Text>
        //             </Card.Body>
        //         </Card>
        //     ))
        // }
        if (!products) {
            return <p>loading...</p>
        } else if (products.length === 0) {
            return <p>no products yet, go add some</p>
        }

        let productCards

        if (products.length > 0) {
            productCards = products.map(product => (
                <div key={product.id} style={{ width: '30%'}}className="productCards">
                    <Link to={`/products/${product._id}`}  className="links"> {product.name}
                    <img src={`${product.image}`}  class='img-thumbnail'/> </Link>
                    <p>$ {product.price}</p>
                </div>
            ))
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

