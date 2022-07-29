import React, { useState, useEffect } from 'react';
import { getAllUnderTwenty } from '../../api/products';

const ShowUnderTwenty = (props) => {
   const [price, setPrice] = useState(null)

    useEffect(()=> {
        getAllUnderTwenty()
            .then(res => {
                setPrice(res.data.price)
            })
            .catch(error => console.log(error))
        },[])
    if (!price || price.length === 0) {
        return   <>
        <div className="container">
            <h2 className="filter">All Items Under $20 </h2>
       </div>

       <div className='wrap'>
        <div className='stack'>
            <h3 className='filterby'>Filter By</h3>
                <a className="links" href="/"> <span> Bodycare </span> </a><br/>
                <a className="links" href="/"> <span> Fragrance </span> </a><br/>
                <a className="links" href="/"><span> Haircare </span> </a><br/>
                <a className="links" href="/"> <span> Makeup </span> </a><br/>
                <a className="links" href="/"> <span> Skincare </span> </a><br/>
        </div>

         <div className="index">
           <h2>We are working on getting you some great recommendations! </h2>
            </div>
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
     
       <div className='wrap'>
            <div className='stack'>
                <h3 className='filterby'>Filter By</h3>
                    <a className="links" href="/"> <span> Bodycare </span> </a><br/>
                    <a className="links" href="/"> <span> Fragrance </span> </a><br/>
                    <a className="links" href="/"><span> Haircare </span> </a><br/>
                    <a className="links" href="/"> <span> Makeup </span> </a><br/>
                    <a className="links" href="/"> <span> Skincare </span> </a><br/>
            </div>

            <div className='cards'>
                <div className="index">
                {priceCards}
                </div>
            </div>
       </div>
    </>
)};
export default ShowUnderTwenty;