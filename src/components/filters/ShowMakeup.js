import React, { useState, useEffect } from 'react';
import { getAllMakeup } from '../../api/products';

const ShowMakeup = (props) => {
    const [makeup, setMakeup] = useState(null)

    useEffect(()=> {
        getAllMakeup()
            .then(res => {
                console.log('this is the res', res)
                setMakeup(res.data.makeup)
            })
            .catch(error => console.log(error))
        },[])

        if (!makeup) {
            return <h3>loading...</h3>
        } else if (makeup.length === 0) {
            return  <>
            <div className="container">
                <h2 className="filter">All Makeup </h2>
            </div>
            <div className="together">
                <h4 className='button-51'> Eye Products </h4>
                <h4 className='button-51'> Face Products </h4>
                <h4 className='button-51'> Cheek Products</h4>
                <h4 className='button-51'> Lip Products </h4>
            </div>
            <div className="index">
           <h2 style={{ margin: "100px"}}>We are working on getting you some great recommendations! </h2>
            </div>
           </>
        }


        let makeupCards
        if (makeup.length > 0) {
            makeupCards = makeup.map(makeups => (
                <div key={makeups.id} >
                    <a href={`/products/${makeups._id}`}  className = "links"> 
                        <img src= {`${makeups.image}`}  className="imgthumbnail"/> <h5 id="brandname">{makeups.brand}</h5><span className="productname">{makeups.name}</span></a> 
                </div>
            ))
        }


    return (
       <>
       <div className="container">
            <h2 className="filter">All Makeup </h2>
        </div>
        <div className="together">
            <h4 className='button-51'> Eye Products </h4>
            <h4 className='button-51'> Face Products </h4>
            <h4 className='button-51'> Cheek Products</h4>
            <h4 className='button-51'> Lip Products </h4>
        </div>
        <div className="index">
        {makeupCards}
        </div>
       </>
)};
export default ShowMakeup;