import apiUrl from '../apiConfig'
import axios from 'axios'

export const getAllProducts = () => {
    return axios(`${apiUrl}/products`)
}
// SHOW -> get by id
export const getOneProduct = (productId) => {
    return axios(`${apiUrl}/products/${productId}`)
}

// POST -> create 
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
    return axios({
        url: `${apiUrl}/products/${productId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}

export const getAllSkincare = () => {
    return axios(`${apiUrl}/products/skincare`)
}
export const getAllHaircare = () => {
    return axios(`${apiUrl}/products/haircare`)
}

export const getAllBodycare = () => {
    return axios(`${apiUrl}/products/bodycare`)
}

export const getAllMakeup = () => {
    return axios(`${apiUrl}/products/makeup`)
}

export const getAllFragrance = () => {
    return axios(`${apiUrl}/products/fragrance`)
}

export const getAllKBeauty = () => {
    return axios(`${apiUrl}/products/kbeauty`)
}


