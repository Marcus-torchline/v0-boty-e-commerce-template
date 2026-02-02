-- Create products table for Confitone e-commerce
CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  original_price DECIMAL(10, 2),
  image TEXT NOT NULL,
  badge TEXT,
  category TEXT NOT NULL CHECK (category IN ('sleeves', 'bundles', 'accessories')),
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for category filtering
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_featured ON products(featured);

-- Insert Confitone products
INSERT INTO products (id, name, description, price, original_price, image, badge, category, featured) VALUES
-- Sleeves
('arm-toning-sleeves', 'Arm Toning Sleeves', 'Original compression arm shapers for daily wear', 49.00, NULL, '/images/confitone-hero.png', 'Bestseller', 'sleeves', true),
('premium-thermal-sleeves', 'Premium Thermal Sleeves', 'Enhanced warmth technology for better results', 59.00, NULL, '/images/confitone-benefits.png', 'New', 'sleeves', true),
('sport-compression-sleeves', 'Sport Compression Sleeves', 'Active lifestyle arm support for workouts', 54.00, NULL, '/images/confitone-hero.png', NULL, 'sleeves', false),
('plus-size-sleeves', 'Plus Size Sleeves', 'Extended comfort fit for all body types', 52.00, NULL, '/images/confitone-benefits.png', NULL, 'sleeves', false),
('everyday-comfort-sleeves', 'Everyday Comfort Sleeves', 'Ultra-soft fabric for sensitive skin', 47.00, NULL, '/images/confitone-hero.png', NULL, 'sleeves', false),
('cooling-sleeves', 'Cooling Sleeves', 'Breathable mesh design for warm weather', 55.00, NULL, '/images/confitone-benefits.png', 'New', 'sleeves', false),

-- Bundles
('starter-bundle', 'Starter Bundle', '2 pairs of sleeves + free guide book', 89.00, 108.00, '/images/confitone-banner.jpg', 'Sale', 'bundles', true),
('complete-system', 'Complete Toning System', '3 pairs + toning gel + guide book', 129.00, 169.00, '/images/confitone-hero.png', 'Best Value', 'bundles', true),
('gift-set', 'Gift Set', 'Premium packaging perfect for gifting', 79.00, NULL, '/images/confitone-benefits.png', NULL, 'bundles', false),
('monthly-subscription', 'Monthly Subscription', 'Fresh sleeves delivered to your door monthly', 39.00, 49.00, '/images/confitone-banner.jpg', 'Subscribe & Save', 'bundles', false),
('couples-bundle', 'Couples Bundle', '4 pairs - share the confidence journey', 159.00, 196.00, '/images/confitone-hero.png', 'Sale', 'bundles', false),
('ultimate-transformation', 'Ultimate Transformation Kit', '5 pairs + gel + guide + carrying case', 189.00, 249.00, '/images/confitone-benefits.png', 'Best Value', 'bundles', true),

-- Accessories
('toning-gel', 'Toning Gel', 'Enhances thermal activation for better results', 29.00, NULL, '/images/confitone-benefits.png', 'New', 'accessories', true),
('guide-book', 'Toned Arms After 40', '5+ simple exercises guide for real results', 19.00, NULL, '/images/confitone-banner.jpg', NULL, 'accessories', false),
('carrying-case', 'Travel Carrying Case', 'Compact storage solution for on-the-go', 15.00, NULL, '/images/confitone-hero.png', NULL, 'accessories', false),
('replacement-straps', 'Replacement Straps', 'Adjustable velcro straps set of 4', 12.00, NULL, '/images/confitone-benefits.png', NULL, 'accessories', false),
('firming-cream', 'Arm Firming Cream', 'Moisturizing cream with caffeine and retinol', 34.00, NULL, '/images/confitone-hero.png', 'New', 'accessories', true),
('measuring-tape', 'Progress Measuring Tape', 'Track your arm measurements over time', 8.00, NULL, '/images/confitone-benefits.png', NULL, 'accessories', false)

ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  price = EXCLUDED.price,
  original_price = EXCLUDED.original_price,
  image = EXCLUDED.image,
  badge = EXCLUDED.badge,
  category = EXCLUDED.category,
  featured = EXCLUDED.featured,
  updated_at = NOW();
