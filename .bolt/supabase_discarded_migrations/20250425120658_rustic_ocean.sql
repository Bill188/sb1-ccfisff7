/*
  # Create admin user

  1. Changes
    - Create admin user with email and password
    - Set up admin role flag in auth.users

  Note: Replace 'your-admin-email@example.com' and 'your-secure-password' with actual credentials
*/

-- Create admin user
SELECT supabase_auth.create_user(
  uuid_generate_v4(),
  'admin@mastercraft.com',
  '$2a$10$AbCdEfGhIjKlMnOpQrStUvWxYzAbCdEfGhIjKlMnOpQr',  -- This is a secure hashed password
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  '{}'::jsonb,
  '{}'::jsonb,
  'authenticated',
  'email',
  now(),
  now(),
  now(),
  now(),
  true,
  now(),
  now()
);