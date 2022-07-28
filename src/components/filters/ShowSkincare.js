import React, { useState, useEffect } from 'react';
import { getAllSkincare } from '../../api/products';

const ShowSkincare = (props) => {
   const [skincare, setSkincare] = useState(null)

    useEffect(()=> {
        getAllSkincare()
            .then(res => {
                console.log('this is the res', res)
                setSkincare(res.data.skincare)
            })
            .catch(error => console.log(error))
        },[])
    if (!skincare) {
        return <h3>loading...</h3>
    } else if (skincare.length === 0) {
        return <p>No Products Currently. Please Check Back Later!</p>
    }


    let skincareCards
    if (skincare.length > 0) {
        skincareCards = skincare.map(skincares => (
            <div key={skincares.id} >
                <a href={`products/${skincares._id}`}  className = "links"> 
                    <img src= {`${skincares.image}`}  className="imgthumbnail"/> <h5 id="brandname">{skincares.brand}</h5><span className="productname">{skincares.name}</span></a> 
            </div>
        ))
    }

    return (
       <>
       <h2 className="filter">All Skincare</h2>
       <div className="together">
            <h4 className='button-51'> Cleanser </h4>
            <h4 className='button-51'> Toner/Essence </h4>
            <h4 className='button-51'> Serums </h4>
            <h4 className='button-51'> Moisturizers </h4>
            <h4 className='button-51'> Treatments </h4>
        </div>
       <div className="index">
       {skincareCards}
       </div>
       </>
)};
export default ShowSkincare;