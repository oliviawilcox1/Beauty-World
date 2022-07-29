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

            <div className='wrap'>
                <div className='stack'>
                    <h3 className='filterby'>Filter By</h3>
                    <a className="links" href="/"><span> Cleanser </span> </a><br/>
                    <a className="links" href="/"><span> Toner/Essence </span></a> <br/>
                    <a className="links" href="/"><span> Serums </span> </a><br/>
                    <a className="links" href="/"><span> Moisturizers </span> </a><br/>
                    <a className="links" href="/"><span> Sunscreen </span> </a><br/>
                </div>

                <div className="index">
                    <h2 style={{ margin: "100px"}}>We are working on getting you some great recommendations! </h2>
                </div>
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
        
        <div className='wrap'>
            <div className='stack'>
                <h3 className='filterby'>Filter By</h3>
                <a className="links" href="/"><span> Cleanser </span> </a><br/>
                <a className="links" href="/"><span> Toner/Essence </span></a> <br/>
                <a className="links" href="/"><span> Serums </span> </a><br/>
                <a className="links" href="/"><span> Moisturizers </span> </a><br/>
                <a className="links" href="/"><span> Sunscreen </span> </a><br/>
            </div>

            <div className='cards'>
                <div className="index">
                {kbeautyCards}
                </div>
            </div>
        </div>
       </>
)};
export default ShowKbeauty;
