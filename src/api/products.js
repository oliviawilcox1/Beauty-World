import apiUrl from '../apiConfig'
import axios from 'axios'

export const getAllProducts = () => {
    return axios(`${apiUrl}/products`)
}

// show function 
export const getOneProduct = (productId) => {
    return axios(`${apiUrl}/products/${productId}`)
}

// post -> create 
export const createProduct = (user, newProduct) => {
    return axios({
        url: `${apiUrl}/products`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: {product: newProduct}
    })
}

// PATCH -> update function
export const updateProduct = (user, updatedProduct) => {
    console.log('user', user)
    console.log('this is newProduct', updatedProduct)
    return axios({
        url: `${apiUrl}/products/${updatedProduct._id}`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { product: updatedProduct }
    })
}

// DELETE -> remove function
export const removeProduct = (user, productId) => {
    console.log('user', user)
    return axios({
        url: `${apiUrl}/products/${productId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}

