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
    <div class="desc2">
        <h4>Ingredient Standouts </h4>
        <p class='desc2'>{product. ingredienthighlights}.</p>
        <div>
            <h4 class="desc3" onClick={handleClick}>See Full List of Ingredients </h4>
            {ingredients && (
                <p class="desc2">{product.ingredients}<br/>
                <h5 class="desc3" onClick={showLess}>Show Less</h5></p>
            )
            }
        </div> 
    </div>
)};
export default ShowIngredients;