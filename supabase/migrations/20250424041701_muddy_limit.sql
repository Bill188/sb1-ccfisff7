/*
  # Update contact requests table policies

  1. Changes
    - Add policy to allow anonymous submissions
    - Keep existing policies for authenticated users

  2. Security
    - Allows public access for INSERT only
    - Maintains existing RLS for authenticated users
*/

-- Allow anonymous submissions
CREATE POLICY "Anyone can create contact requests"
  ON contact_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);