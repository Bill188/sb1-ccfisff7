/*
  # Add admin emails table

  1. New Tables
    - `admin_emails`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `admin_emails` table
    - Only authenticated users can read admin emails
*/

CREATE TABLE IF NOT EXISTS admin_emails (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE admin_emails ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can read admin emails"
  ON admin_emails
  FOR SELECT
  TO authenticated
  USING (true);