import React, { useState, useEffect } from 'react';

const ShowIngredients = (props) => {
    const { user, product, triggerRefresh } = props;
    return (
        <div class="nopadding">
        <h5>Ingredient Standouts </h5>
        <p class='desc2'>{product. ingredienthighlights}.</p>
        {/* <div>
        <a href="" data-show-more>See Full List of Ingredients</a>
        </div>  */}
          <div>
            <h4 > Full List of Ingredients</h4>
            {/* <a href="" data-show-less>Show Less</a> */}
            <p class="desc2">{product.ingredients}</p>
          </div> 
      </div>
)};
export default ShowIngredients;