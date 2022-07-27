import React, { useState, useEffect } from 'react'
import { getAllFavorites } from '../../api/favorites'
import { Link, useNavigate } from 'react-router-dom'
import { removeFavorite } from '../../api/favorites'

const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap',
}

const IndexFavorites = (props) => {
    const [favorites, setfavorites] = useState(null)
    const [updated, setUpdated] = useState(false)
    const { user, msgAlert } = props
    const navigate = useNavigate()
    useEffect(()=> {
        getAllFavorites()
            .then(res => {
                setfavorites(res.data.favorites)
            })
            .catch(() => 
                msgAlert({
                    heading:"Uh Oh, something went wrong finding your favorites..",
                    variant: 'danger'
                }))
        },[updated])

    const removeTheFavorite = (favoriteId) => {
        removeFavorite(user, favoriteId)
            .then(() => {
            setUpdated((prev) => !prev)
            navigate(`/favorites`);
            })
            .catch(error => console.log(error));
    }
    
    if (!favorites) {
        return <p>loading...</p>
    } else if (favorites.length === 0) {
        return <p>Add your favorites for them to be displayed here!</p>
    }


    let favoriteCards
    if (favorites.length > 0) 
        {
        favoriteCards = favorites.map(favorite => (
            <div key={favorite._id} style={{ width:'300px'}}>
                <Link to={`/products/${favorite.product._id}`} style={{overflowWrap: 'break-word'}} > {favorite.product.name} </Link>
                    <img src={`${favorite.product.image}`} style={{ height: '200px'}} class='img-thumbnail' />
                    <p>$ {favorite.product.price}</p>
                <button onClick={() => removeTheFavorite(favorite._id)}>Remove from Favorites</button>
            </div>
        ))
    }

    return (
        <>
            <h3>Your Favorites </h3>
            <div style={cardContainerLayout}>
                {favoriteCards}
            </div>
        </>
    )
}

export default IndexFavorites
