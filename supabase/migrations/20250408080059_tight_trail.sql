/*
  # Update Room Access Policies

  1. Changes
    - Update room viewing policy to allow public access
    - Add index on room price for better performance
  
  2. Security
    - Maintain RLS but allow public viewing of rooms
*/

-- Update room policy to allow public viewing
DROP POLICY IF EXISTS "Anyone can view rooms" ON rooms;

CREATE POLICY "Anyone can view rooms" ON rooms
  FOR SELECT
  USING (true);

-- Add index for room sorting
CREATE INDEX IF NOT EXISTS rooms_price_idx ON rooms(price);

-- Ensure we have some sample rooms
INSERT INTO rooms (title, description, price, capacity, image_url)
SELECT
  'Deluxe Valley View',
  'Spacious room with stunning valley views, private bathroom, and modern amenities',
  4500,
  2,
  'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80'
WHERE NOT EXISTS (
  SELECT 1 FROM rooms WHERE title = 'Deluxe Valley View'
);

INSERT INTO rooms (title, description, price, capacity, image_url)
SELECT
  'Premium Suite',
  'Luxurious suite with separate living area, balcony, and premium amenities',
  6500,
  3,
  'https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&q=80'
WHERE NOT EXISTS (
  SELECT 1 FROM rooms WHERE title = 'Premium Suite'
);

INSERT INTO rooms (title, description, price, capacity, image_url)
SELECT
  'Family Room',
  'Perfect for families, featuring two bedrooms and a spacious living area',
  7500,
  4,
  'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80'
WHERE NOT EXISTS (
  SELECT 1 FROM rooms WHERE title = 'Family Room'
);