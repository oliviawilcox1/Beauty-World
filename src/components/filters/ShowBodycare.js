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
            return <>
            <div className="container">
                <h2 className="filter">All Bodycare</h2>
            </div>
            <div className="together">
                <h4 className='button-51'> Body Wash </h4>
                <h4 className='button-51'> Bath Products </h4>
                <h4 className='button-51'> Exfoliant </h4>
                <h4 className='button-51'> Body Lotion </h4>
                <h4 className='button-51'> Body Oils </h4>
            </div>

            <div className="index">
           <h2> We are working on getting you some great recommendations! </h2>
            </div>
           </>
        }


        let bodycareCards
        if (bodycare.length > 0) {
            bodycareCards = bodycare.map(bodycares => (
                <div key={bodycares.id} >
                    <a href={`/products/${bodycares._id}`}  className = "links"> 
                        <img src= {`${bodycares.image}`}  className="imgthumbnail"/> <h5 id="brandname">{bodycares.brand}</h5><span className="productname">{bodycares.name}</span></a> 
                </div>
            ))
        }


    return (
       <>
        <div className="container">
            <h2 className="filter">All Bodycare</h2>
        </div>
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
