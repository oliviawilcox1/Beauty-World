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
        return   <>
        <div className="container">
            <h2 className="filter">All Skincare</h2>
        </div>

        <div className='wrap'>
            <div className='stack'>
                <h3 className='filterby'>Filter By</h3>
                <a className="links" href="/"> <span> Cleanser </span> </a><br/>
                <a className="links" href="/"> <span> Toner/Essence </span> </a><br/>
                <a className="links" href="/"><span> Serums </span> </a><br/>
                <a className="links" href="/"> <span> Moisturizers </span> </a><br/>
                <a className="links" href="/"> <span> Sunscreen </span> </a><br/>
            </div>

            <div className="index">
                <h2 style={{ margin: "100px"}}>We are working on getting you some great recommendations! </h2>
            </div>
        </div>
        </>
    }


    let skincareCards
    if (skincare.length > 0) {
        skincareCards = skincare.map(skincares => (
            <div key={skincares.id} >
                <a href={`/products/${skincares._id}`}  className = "links"> 
                    <img src= {`${skincares.image}`}  className="imgthumbnail"/> <h5 id="brandname">{skincares.brand}</h5><span className="productname">{skincares.name}</span></a> 
            </div>
        ))
    }

    return (
       <>
        <div className="container">
            <h2 className="filter">All Skincare</h2>
        </div>

        <div className='wrap'>
            <div className='stack'>
                <h3 className='filterby'>Filter By</h3>
                <a className="links" href="/"> <span> Cleanser </span> </a><br/>
                <a className="links" href="/"> <span> Toner/Essence </span> </a><br/>
                <a className="links" href="/"><span> Serums </span> </a><br/>
                <a className="links" href="/"> <span> Moisturizers </span> </a><br/>
                <a className="links" href="/"> <span> Sunscreen </span> </a><br/>
            </div>
        
                <div className="cards">
                    <div className='index'>
                        {skincareCards}
                </div>
            </div>
       </div>
       </>
)};
export default ShowSkincare;