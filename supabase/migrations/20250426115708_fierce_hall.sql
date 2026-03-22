/*
  # Add initial admin email

  1. Changes
    - Insert admin email into admin_emails table
    - This email will receive notifications for new contact requests

  2. Security
    - Uses existing RLS policies
    - No security changes needed
*/

INSERT INTO admin_emails (email)
VALUES ('bllzhn@hotmail.com')
ON CONFLICT (email) DO NOTHING;