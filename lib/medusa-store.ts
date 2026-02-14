// Assuming this is part of lib/medusa-store.ts

type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    handle: string; // New field added
    // other fields...
};

async function getMedusaProductByHandle(handle: string): Promise<Product | null> {
    const response = await fetch(`/products/${handle}`);
    if (!response.ok) {
        return null; // Or handle error appropriately
    }
    const product: Product = await response.json();
    return product;
}