import React, { useState, useEffect } from 'react';

const ShowDescription = (props) => {
    const { user, product, triggerRefresh } = props;
    return (
      <div className="desc2">
        <h4>Description </h4>
        <p className='desc'> {product.description}<br/></p>
        <p className='desc2'>{product.size}</p>
      </div>
)};
export default ShowDescription;