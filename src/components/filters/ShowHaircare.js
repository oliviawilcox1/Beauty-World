import React, { useState, useEffect } from 'react';
import { getAllHaircare } from '../../api/products';

const ShowHaircare = (props) => {
    const [haircare, setHaircare] = useState(null)

    useEffect(()=> {
        getAllHaircare()
            .then(res => {
                console.log('this is the res', res)
                setHaircare(res.data.haircare)
            })
            .catch(error => console.log(error))
        },[])

        if (!haircare) {
            return <h3>loading...</h3>
        } else if (haircare.length === 0) {
            return  <>
            <div className="container">
                <h2 className="filter">All Haircare</h2>
            </div>
            <div className="together">
                <h4 className='button-51'> Shampoo </h4>
                <h4 className='button-51'> Conditioner </h4>
                <h4 className='button-51'> Products </h4>
                <h4 className='button-51'> Heat Protectant </h4>
                <h4 className='button-51'> Treatments </h4>
            </div>
            <div className="index">
           <h2 style={{ margin: "100px"}}>We are working on getting you some great recommendations! </h2>
            </div>
           </>
        }


        let haircareCards
        if (haircare.length > 0) {
            haircareCards = haircare.map(haircares => (
                <div key={haircares.id} >
                    <a href={`/products/${haircares._id}`}  className = "links"> 
                        <img src= {`${haircares.image}`}  className="imgthumbnail"/> <h5 id="brandname">{haircares.brand}</h5><span className="productname">{haircares.name}</span></a> 
                </div>
            ))
        }


    return (
       <>
        <div className="container">
            <h2 className="filter">All Haircare</h2>
        </div>
        <div className="together">
            <h4 className='button-51'> Shampoo </h4>
            <h4 className='button-51'> Conditioner </h4>
            <h4 className='button-51'> Products </h4>
            <h4 className='button-51'> Heat Protectant </h4>
            <h4 className='button-51'> Treatments </h4>
        </div>
        <div className="index">
        {haircareCards}
        </div>
       </>
)};
export default ShowHaircare;