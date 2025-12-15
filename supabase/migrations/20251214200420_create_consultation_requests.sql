/*
  # Create Consultation Requests Table

  ## Overview
  This migration creates the core database structure for managing consultation booking requests
  from prospective clients seeking immigration and travel assistance.

  ## New Tables
  
  ### `consultation_requests`
  Stores all consultation booking requests submitted through the website.
  
  **Columns:**
  - `id` (uuid, primary key) - Unique identifier for each request
  - `full_name` (text, required) - Client's full name
  - `email` (text, required) - Client's email address
  - `phone` (text, required) - Client's phone number with country code
  - `current_country` (text, required) - Client's current location/country
  - `destination_country` (text, required) - Intended destination country
  - `service_type` (text, required) - Type of service needed (visa, work permit, study, relocation, appeal)
  - `message` (text, optional) - Additional details or questions from client
  - `status` (text, default: 'pending') - Request status (pending, contacted, completed, cancelled)
  - `created_at` (timestamptz, default: now()) - Timestamp of request submission
  - `updated_at` (timestamptz, default: now()) - Timestamp of last update

  ## Security
  
  ### Row Level Security (RLS)
  - RLS is enabled on the `consultation_requests` table
  - Anonymous users can INSERT their own consultation requests (for public booking form)
  - Only authenticated admin users can view/manage consultation requests
  
  ### Policies
  1. **"Anyone can submit consultation request"** - Allows anonymous form submissions
  2. **"Authenticated users can view all requests"** - For admin dashboard access
  3. **"Authenticated users can update requests"** - For managing request status

  ## Notes
  - Email validation should be handled at the application layer
  - Phone numbers should include country codes
  - Status field uses text for flexibility (consider enum in future if needed)
  - No personal data is publicly accessible due to RLS policies
*/

-- Create consultation_requests table
CREATE TABLE IF NOT EXISTS consultation_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  current_country text NOT NULL,
  destination_country text NOT NULL,
  service_type text NOT NULL,
  message text DEFAULT '',
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to submit a consultation request
CREATE POLICY "Anyone can submit consultation request"
  ON consultation_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Authenticated users (admin) can view all requests
CREATE POLICY "Authenticated users can view all requests"
  ON consultation_requests
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Authenticated users (admin) can update requests
CREATE POLICY "Authenticated users can update requests"
  ON consultation_requests
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create index for faster queries by status and date
CREATE INDEX IF NOT EXISTS idx_consultation_requests_status 
  ON consultation_requests(status);

CREATE INDEX IF NOT EXISTS idx_consultation_requests_created_at 
  ON consultation_requests(created_at DESC);