/*
  # Fix contact requests permissions

  1. Changes
    - Drop existing policies
    - Create new simplified policies for contact requests
    - Ensure anonymous users can create requests
    - Ensure authenticated users can view and update requests

  2. Security
    - Maintains RLS
    - Provides necessary access levels
*/

-- First drop all existing policies
DROP POLICY IF EXISTS "Service role can create contact requests" ON contact_requests;
DROP POLICY IF EXISTS "Anyone can create contact requests" ON contact_requests;
DROP POLICY IF EXISTS "Authenticated users can view all requests" ON contact_requests;
DROP POLICY IF EXISTS "Authenticated users can update requests" ON contact_requests;
DROP POLICY IF EXISTS "Users can view their own requests" ON contact_requests;

-- Create new simplified policies
CREATE POLICY "Enable insert access for all users"
  ON contact_requests
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Enable read access for authenticated users"
  ON contact_requests
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Enable update access for authenticated users"
  ON contact_requests
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);