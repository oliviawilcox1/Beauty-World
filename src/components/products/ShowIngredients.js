import React, { useState, useEffect } from 'react';

const ShowIngredients = (props) => {
    const { user, product, triggerRefresh } = props;
    const [ingredients, setIngredients] = useState(false)

    const handleClick =()=> {
        setIngredients(true)
    }
    const showLess =()=> {
        setIngredients(false)
    }

return (
    <div className="desc2">
        <h4>Ingredient Standouts </h4>
        <p className='desc2'>{product. ingredienthighlights}.</p>
        <div>
            <h4 className="desc3" onClick={handleClick}>See Full List of Ingredients </h4>
            {ingredients && (
                <p className="desc2"> {product.ingredients} <br/>
                <h5 className="desc3" onClick={showLess}> Show Less</h5> </p>
            )}
        </div> 
    </div>
)};

export default ShowIngredients;