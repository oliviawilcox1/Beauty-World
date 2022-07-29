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
            <div className='wrap'>
                <div className="stack">
                    <h3 className='filterby'>Filter By</h3>
                    <a className="links" href="/"> <span> Body Wash </span> </a><br/>
                    <a className="links" href="/"> <span> Bath Products </span> </a><br/>
                    <a className="links" href="/"> <span> Exfoliants </span> </a><br/>
                    <a className="links" href="/"> <span> Body Lotion </span> </a><br/>
                    <a className="links" href="/"> <span> Body Oils </span> </a><br/>
                </div>

                <div className="index">
                    <h2> We are working on getting you some great recommendations! </h2>
                </div>
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

       <div className='wrap'>
                <div className="stack">
                    <h3 className='filterby'>Filter By</h3>
                    <a className="links" href="/"> <span> Body Wash </span> </a><br/>
                    <a className="links" href="/"> <span> Bath Products </span> </a><br/>
                    <a className="links" href="/"> <span> Body Exfoliants </span> </a><br/>
                    <a className="links" href="/"> <span> Body Lotion </span> </a><br/>
                    <a className="links" href="/"> <span> Body Oils </span> </a><br/>
                </div>

            <div className='cards'>
                <div className="index">
                    {bodycareCards}
                </div>
            </div>
        </div>
       </>
)};
export default ShowBodycare;
