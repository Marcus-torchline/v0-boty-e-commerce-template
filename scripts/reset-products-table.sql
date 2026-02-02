-- Clear the products table and update schema to match Shopify export
-- This removes the seeded Confitone products and prepares for user's actual products

-- First, delete all existing products
DELETE FROM products;

-- Optionally, you can alter the table to add Shopify-specific columns
-- For now, we'll keep the existing schema which works well for e-commerce:
-- id, name, description, price, original_price, image, badge, category, featured, created_at, updated_at

-- The existing schema maps to Shopify fields as follows:
-- id = Handle
-- name = Title  
-- description = Body (HTML) - stripped of HTML
-- price = Variant Price
-- original_price = Variant Compare At Price
-- image = Image Src (first image)
-- badge = can be derived from tags or sale status
-- category = Product Category or Type
-- featured = can be set manually

-- Products will be added manually by the user through their preferred method
