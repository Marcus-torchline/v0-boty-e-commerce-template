// Updated code to use handle instead of id in product links

import React from 'react';

const ProductPage = ({ product }) => {
    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <a href={`/products/${product.handle}`}>View Product</a>
        </div>
    );
};

export default ProductPage;
