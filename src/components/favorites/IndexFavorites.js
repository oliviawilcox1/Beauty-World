import React, { useState, useEffect } from 'react'
import { getAllFavorites } from '../../api/favorites'
import { Link } from 'react-router-dom'

const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap',
}

const IndexFavorites = (props) => {
        const [favorites, setfavorites] = useState(null)
        const { user, msgAlert } = props
        useEffect(()=> {
            getAllFavorites()
                .then(res => {
                    console.log('this is the res', res)
                    setfavorites(res.data.favorites)
                })
                .then(()=> {
                    msgAlert({
                        heading:"Found Favorites",
                        variant: 'success'
                    })
                })
                .catch(() => 
                    msgAlert({
                        heading:"Uh Oh, something went wrong finding your favorites..",
                        variant: 'danger'
                    }))
            },[])
        if (!favorites) {
            return <p>loading...</p>
        } else if (favorites.length === 0) {
            return <p>no favorites yet, go add some</p>
        }

        let favoriteCards

        if (favorites.length > 0) {
            favoriteCards = favorites.map(favorite => (
                <div key={favorite._id} style={{ width:'300px'}}>
                    <Link to={`/products/${favorite.product._id}`} style={{overflowWrap: 'break-word'}} >{favorite.product.name}</Link>
                    <img src={`${favorite.product.image}`} style={{ height: '200px'}} class='img-thumbnail' />
                    <p>$ {favorite.product.price}</p>
                </div>
            ))
        }

        return(
            <>
                <h3>Your Favorites :)</h3>
                {/* using an inline style with an object declared above */}
                <div style={cardContainerLayout}>
                    {favoriteCards}
                </div>
            </>
        )

}

export default IndexFavorites
