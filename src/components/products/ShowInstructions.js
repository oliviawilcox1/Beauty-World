import React, { useState, useEffect } from 'react';

const ShowInstructions = (props) => {
    const { user, product, triggerRefresh } = props;
    return (
        <div className="desc2">
            <h4>Instructions </h4>
            <p className="desc2"> {product.instructions}</p>
        </div>
)};
export default ShowInstructions;