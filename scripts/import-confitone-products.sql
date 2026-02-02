-- Clear existing products and import Confitone products from JSON
-- Excluding the mattress product

DELETE FROM products;

-- Insert 11 Confitone products (mapped from Shopify JSON format)
INSERT INTO products (id, name, description, price, original_price, image, badge, category, featured) VALUES
-- Waist Transformation Kit
('confitone-waist-transformation-kit', 'CONFITONE Waist Transformation Kit', 'The CONFITONE Waist Transformation Kit delivers targeted heat therapy designed to support your body contouring goals. This advanced waist belt helps enhance circulation and promote a more sculpted silhouette. Includes Waist belt, Sweat-Boost Gel, and an E-Book.', 54.99, 109.99, 'https://cdn.shopify.com/s/files/1/0706/6281/5814/files/Waist-toning-kit.png?v=1769907610', 'Sale', 'kits', true),

-- Arm Toning Kit
('confitone-arm-toning-kit', 'CONFITONE Arm Toning Kit', 'The CONFITONE Arm Toning Kit is designed to help tone and tighten your upper arms through targeted compression and heat therapy. Includes arm sleeves, toning gel, and exercise guide.', 49.99, 99.99, 'https://cdn.shopify.com/s/files/1/0706/6281/5814/files/Arm-toning-kit.png?v=1769907610', 'Bestseller', 'kits', true),

-- Thigh Toning Kit  
('confitone-thigh-toning-kit', 'CONFITONE Thigh Toning Kit', 'The CONFITONE Thigh Toning Kit helps sculpt and tone your thighs with compression technology and heat therapy. Includes thigh bands, toning gel, and workout guide.', 54.99, 109.99, 'https://cdn.shopify.com/s/files/1/0706/6281/5814/files/Thigh-toning-kit.png?v=1769907610', NULL, 'kits', false),

-- Sweat Boost Gel
('confitone-sweat-boost-gel', 'CONFITONE Sweat Boost Gel', 'Enhance your toning results with our Sweat Boost Gel. Apply before wearing any CONFITONE product for increased thermogenic effect.', 24.99, NULL, 'https://cdn.shopify.com/s/files/1/0706/6281/5814/files/Sweat-boost-gel.png?v=1769907610', NULL, 'accessories', false),

-- Arm Sleeves (Standalone)
('confitone-arm-sleeves', 'CONFITONE Arm Sleeves', 'Premium compression arm sleeves designed to help tone and tighten upper arms. Comfortable for all-day wear.', 34.99, NULL, 'https://cdn.shopify.com/s/files/1/0706/6281/5814/files/Arm-sleeves.png?v=1769907610', NULL, 'sleeves', false),

-- Waist Belt (Standalone)
('confitone-waist-belt', 'CONFITONE Waist Belt', 'Adjustable waist belt with thermal technology for targeted midsection toning. Discreet under clothing.', 39.99, NULL, 'https://cdn.shopify.com/s/files/1/0706/6281/5814/files/Waist-belt.png?v=1769907610', NULL, 'belts', false),

-- Thigh Bands (Standalone)
('confitone-thigh-bands', 'CONFITONE Thigh Bands', 'Compression thigh bands that help sculpt and tone your legs with gentle heat therapy.', 39.99, NULL, 'https://cdn.shopify.com/s/files/1/0706/6281/5814/files/Thigh-bands.png?v=1769907610', NULL, 'bands', false),

-- E-Book Guide
('confitone-ebook-guide', 'Toned Body After 40 E-Book', 'Digital guide with exercises, nutrition tips, and lifestyle advice for women over 40 looking to tone and transform.', 9.99, NULL, 'https://cdn.shopify.com/s/files/1/0706/6281/5814/files/Ebook-guide.png?v=1769907610', NULL, 'accessories', false),

-- Full Body Bundle
('confitone-full-body-bundle', 'CONFITONE Full Body Bundle', 'Complete transformation package including arm sleeves, waist belt, thigh bands, sweat boost gel, and e-book guide. Best value for full body toning.', 129.99, 199.99, 'https://cdn.shopify.com/s/files/1/0706/6281/5814/files/Full-body-bundle.png?v=1769907610', 'Best Value', 'bundles', true),

-- Gift Set
('confitone-gift-set', 'CONFITONE Gift Set', 'Perfect gift for someone ready to start their toning journey. Includes arm sleeves, sweat boost gel, and e-book in premium packaging.', 59.99, 79.99, 'https://cdn.shopify.com/s/files/1/0706/6281/5814/files/Gift-set.png?v=1769907610', 'Gift', 'bundles', false),

-- Starter Kit
('confitone-starter-kit', 'CONFITONE Starter Kit', 'The perfect introduction to CONFITONE. Includes one pair of arm sleeves and travel-size sweat boost gel.', 39.99, 49.99, 'https://cdn.shopify.com/s/files/1/0706/6281/5814/files/Starter-kit.png?v=1769907610', 'New', 'bundles', false);
