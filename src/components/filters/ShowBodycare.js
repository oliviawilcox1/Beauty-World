import React, { useState, useEffect } from 'react';
import { getAllBodycare } from '../../api/products';


const ShowBodycare = (props) => {
    const [bodycare, setBodycare] = useState(null)

    useEffect(()=> {
        getAllBodycare()
            .then(res => {
                console.log('this is the res', res)
                setBodycare(res.data.bodycare)
            })
            .catch(error => console.log(error))
        },[])

        if (!bodycare) {
            return <h3>loading...</h3>
        } else if (bodycare.length === 0) {
            return <p>No Products Currently. Please Check Back Later!</p>
        }


        let bodycareCards
        if (bodycare.length > 0) {
            bodycareCards = bodycare.map(bodycares => (
                <div key={bodycares.id} >
                    <a href={`products/${bodycares._id}`}  className = "links"> 
                        <img src= {`${bodycares.image}`}  className="imgthumbnail"/> <h5 id="brandname">{bodycares.brand}</h5><span className="productname">{bodycares.name}</span></a> 
                </div>
            ))
        }


    return (
       <>
        <h2 className="filter">All Skincare</h2>
        <div className="together">
            <h4 className='button-51'> Shampoo </h4>
            <h4 className='button-51'> Conditioner </h4>
            <h4 className='button-51'> Products </h4>
            <h4 className='button-51'> Heat Protectant </h4>
            <h4 className='button-51'> Treatments </h4>
        </div>
        <div className="index">
        {bodycareCards}
        </div>
       </>
)};
export default ShowBodycare;
