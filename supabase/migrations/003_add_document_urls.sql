-- Add document_urls column to consultation_requests table
ALTER TABLE consultation_requests
ADD COLUMN IF NOT EXISTS document_urls TEXT;

-- Add comment to explain the column
COMMENT ON COLUMN consultation_requests.document_urls IS 'Comma-separated URLs of uploaded documents stored in Hetzner Object Storage';

