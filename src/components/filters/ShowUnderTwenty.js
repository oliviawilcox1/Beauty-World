import React, { useState, useEffect } from 'react';
import { getAllUnderTwenty } from '../../api/products';

const ShowUnderTwenty = (props) => {
   const [price, setPrice] = useState(null)

    useEffect(()=> {
        getAllUnderTwenty()
            .then(res => {
                console.log('this is the res', res)
                setPrice(res.data.price)
            })
            .catch(error => console.log(error))
        },[])
    if (!price || price.length === 0) {
        return   <>
        <div className="container">
            <h2 className="filter">All Items Under $20 </h2>
        </div>
         <div className="index">
           <h2 style={{ margin: "100px"}}>We are working on getting you some great recommendations! </h2>
            </div>
        </>
    }


    let priceCards
    if (price.length > 0) {
        priceCards = price.map(prices => (
            <div key={prices.id} >
                <a href={`/products/${prices._id}`}  className = "links"> 
                    <img src= {`${prices.image}`}  className="imgthumbnail"/> <h5 id="brandname">{prices.brand}</h5><span className="productname">{prices.name}</span></a> 
            </div>
        ))
    }

    return (
       <>
       <div className="container">
            <h2 className="filter">All Items Under $20 </h2>
       </div>
       <div className="together">
            <h4 className='button-51'> Bodycare </h4>
            <h4 className='button-51'> Fragrance </h4>
            <h4 className='button-51'> Haircare </h4>
            <h4 className='button-51'> Makeup </h4>
            <h4 className='button-51'> Skincare </h4>
        </div>
       <div className="index">
       {priceCards}
       </div>
       </>
)};
export default ShowUnderTwenty;