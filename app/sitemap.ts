// Updated product URL generation to use 'handle' instead of 'id'
import { Product } from './models/Product';

const createProductUrl = (product: Product): string => {
    return `/products/${product.handle}`;
};

// ... rest of the code

export default createProductUrl;