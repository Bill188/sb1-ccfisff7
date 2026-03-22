/*
  # Update admin access policies

  1. Changes
    - Add policy to allow authenticated users to view all contact requests
    - Add policy to allow authenticated users to update contact requests
    - Keep existing policies for submissions

  2. Security
    - Maintains existing submission policies
    - Adds admin-level access for authenticated users
*/

-- Allow authenticated users to view all contact requests
CREATE POLICY "Authenticated users can view all requests"
  ON contact_requests
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to update contact requests
CREATE POLICY "Authenticated users can update requests"
  ON contact_requests
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Drop the old policy that restricted viewing to own requests
DROP POLICY IF EXISTS "Users can view their own requests" ON contact_requests;