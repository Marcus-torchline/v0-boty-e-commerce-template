// Original content of product-grid.tsx from commit 3cb62e448c40fe033ec3659adcdaeb323ebcc50b

import React from 'react';
import ProductItem from './ProductItem';

const ProductGrid = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductItem key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;