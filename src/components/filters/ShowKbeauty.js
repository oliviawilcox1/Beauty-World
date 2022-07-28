import React, { useState, useEffect } from 'react';
import { getAllKBeauty } from '../../api/products';


const ShowKbeauty = (props) => {
    const [kbeauty, setKbeauty] = useState(null)

    useEffect(()=> {
        getAllKBeauty()
            .then(res => {
                console.log('this is the res', res)
                setKbeauty(res.data.kbeauty)
            })
            .catch(error => console.log(error))
        },[])

        if (!kbeauty || kbeauty.length === 0) {
            return <>
            <div className="container">
                <h2 className="filter">All K-Beauty </h2>
            </div>
            <h4 className='button-51'> Cleanser </h4>
            <h4 className='button-51'> Toner/Essence </h4>
            <h4 className='button-51'> Serums </h4>
            <h4 className='button-51'> Moisturizers </h4>
            <h4 className='button-51'> Treatments </h4>
            <div className="index">
           <h2 style={{ margin: "100px"}}>We are working on getting you some great recommendations! </h2>
            </div>
           </>
        }


        let kbeautyCards
        if (kbeauty.length > 0) {
            kbeautyCards = kbeauty.map(kbeautys => (
                <div key={kbeautys.id} >
                    <a href={`/products/${kbeautys._id}`}  className = "links"> 
                        <img src= {`${kbeautys.image}`}  className="imgthumbnail"/> <h5 id="brandname">{kbeautys.brand}</h5><span className="productname">{kbeautys.name}</span></a> 
                </div>
            ))
        }


    return (
       <>
        <div className="container">
            <h2 className="filter">All K-Beauty </h2>
        </div>
        <div className="together">
            <h4 className='button-51'> Cleanser </h4>
            <h4 className='button-51'> Toner/Essence </h4>
            <h4 className='button-51'> Serums </h4>
            <h4 className='button-51'> Moisturizers </h4>
            <h4 className='button-51'> Treatments </h4>
        </div>
        <div className="index">
        {kbeautyCards}
        </div>
       </>
)};
export default ShowKbeauty;
