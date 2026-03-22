/*
  # Contact Form Schema

  1. New Tables
    - `contact_requests`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `service` (text)
      - `message` (text)
      - `status` (text) - tracks request status
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `contact_requests` table
    - Add policy for authenticated users to read their own requests
    - Add policy for service role to create new requests
*/

CREATE TABLE IF NOT EXISTS contact_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service text NOT NULL,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;

-- Allow service role to create new requests
CREATE POLICY "Service role can create contact requests"
  ON contact_requests
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Allow users to read their own requests by email
CREATE POLICY "Users can view their own requests"
  ON contact_requests
  FOR SELECT
  TO authenticated
  USING (email = auth.jwt() ->> 'email');