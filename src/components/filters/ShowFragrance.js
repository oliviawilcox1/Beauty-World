import React, { useState, useEffect } from 'react';
import { getAllFragrance } from '../../api/products';


const ShowFragrance = (props) => {
    const [fragrance, setFragrance] = useState(null)

    useEffect(()=> {
        getAllFragrance()
            .then(res => {
                console.log('this is the res', res)
                setFragrance(res.data.fragrance)
            })
            .catch(error => console.log(error))
        },[])

        if (!fragrance) {
            return <h3>loading...</h3>
        } else if (fragrance.length === 0) {
            return <>
            <div className="container">
                <h2 className="filter">All Fragrances</h2>
            </div>

          <div className='wrap'>
            <div className='stack'>
                <h3 className='filterby'>Filter By</h3>
                <a className="links" href="/"> <span> Clean </span> </a><br/>
                <a className="links" href="/"> <span> Floral </span> </a><br/>
                <a className="links" href="/"><span> Fruity </span> </a><br/>
                <a className="links" href="/"> <span> Warm </span> </a><br/>
                <a className="links" href="/"> <span> Woody </span> </a><br/>
            </div>

                <div className="index">
                    <h2 >We are working on getting you some great recommendations! </h2>
                </div>
            </div>
           </>
        }


        let fragranceCards
        if (fragrance.length > 0) {
            fragranceCards = fragrance.map(fragrances => (
                <div key={fragrances.id} >
                    <a href={`/products/${fragrances._id}`}  className = "links"> 
                        <img src= {`${fragrances.image}`}  className="imgthumbnail"/> <h5 id="brandname">{fragrances.brand}</h5><span className="productname">{fragrances.name}</span></a> 
                </div>
            ))
        }


    return (
       <>
        <div className="container">
            <h2 className="filter">All Fragrances</h2>
        </div>

        <div className='wrap'>
            <div className='stack'>
                <h3 className='filterby'>Filter By</h3>
                <a className="links" href="/"> <span> Clean </span> </a><br/>
                <a className="links" href="/"> <span> Floral </span> </a><br/>
                <a className="links" href="/"><span> Fruity </span> </a><br/>
                <a className="links" href="/"> <span> Warm </span> </a><br/>
                <a className="links" href="/"> <span> Woody </span> </a><br/>
            </div>
            
            <div className='cards'>
                <div className="index">
                {fragranceCards}
                </div>
            </div>
        </div>
       </>
)};
export default ShowFragrance;
