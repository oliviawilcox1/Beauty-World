import apiUrl from '../apiConfig'
import axios from 'axios'

export const getAllFavorites = () => {
    return axios(`${apiUrl}/favorites`)
}

// post -> create 
export const createFavorite = (user, newFavorite) => {
    return axios({
        url: `${apiUrl}/favorites`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { favorite: newFavorite}
    })
}



// DELETE -> remove function
export const removeFavorite = (user, favoriteId) => {
    console.log('user', user)
    return axios({
        url: `${apiUrl}/favorites/${favoriteId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}
