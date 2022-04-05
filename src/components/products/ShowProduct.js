import React, { useState, useEffect } from 'react'
import { getOneProduct, updateProduct, removeProduct } from '../../api/products'
import { useParams, useNavigate } from 'react-router-dom'

const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const ShowProduct = (props) => {
    const [product, setProduct] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)
    const [updated, setUpdated] = useState(false)
    const {user, msgAlert} = props
    const { id } = useParams()
    const navigate = useNavigate()
    console.log('id in showProduct', id)
    useEffect(() => {
        getOneProduct(id)
            .then(res => setProduct(res.data.product))
            .then(() => {
                msgAlert({
                    heading: 'Here is the product!',
                    variant: 'success',
                })
            })
            .catch(() => {
                msgAlert({
                    heading: 'No product fount',
                    variant: 'danger'
                })
            })
    }, [updated])

    const removeTheProduct = () => {
        removeProduct(user, product.id)
            .then(() => {
                msgAlert({
                    heading: 'product politely removed!',
                    message: "they're gone",
                    variant: 'success'
                })
            })
            .then(() => {navigate(`/`)})
            .catch(() => {
                msgAlert({
                    heading: 'something went wrong',
                    message: 'that aint it',
                    variant: 'danger'
                })
            })
    }

    //let reviews

    if (!product) {
        return <span>Loading...</span>
    }

    return (
        <>
            <h1>{product.name}</h1>
            <img src={`${product.image}`} style={{ height: '200px'}} class='img-thumbnail' />
            <p>Description: {product.description}</p>
            <small>
                Available: {product.available ? 'yes' : 'no'}
            </small> 
            <div>
                {/* <p onClick={() => setModal(true)}>
                    Edit Pet
                </p> */}
                <p onClick={() => removeTheProduct()}>
                    Delete Product
                </p>
            </div>
        </>
    )
}


export default ShowProduct