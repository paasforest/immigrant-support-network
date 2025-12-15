import { supabase } from './supabase';

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export interface UploadResult {
  url: string;
  key: string;
  size: number;
}

/**
 * Validate file before upload
 */
export function validateFile(file: File): { valid: boolean; error?: string } {
  // Check file size
  if (file.size > MAX_FILE_SIZE) {
    return {
      valid: false,
      error: `File size must be less than ${MAX_FILE_SIZE / 1024 / 1024}MB`,
    };
  }

  // Check file type (allow common document types)
  const allowedTypes = [
    'application/pdf',
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ];

  if (!allowedTypes.includes(file.type)) {
    return {
      valid: false,
      error: 'Only PDF, JPG, PNG, WEBP, and DOC/DOCX files are allowed',
    };
  }

  return { valid: true };
}

/**
 * Generate a unique file key with timestamp and sanitized filename
 */
export function generateFileKey(file: File, prefix: string = 'documents'): string {
  const timestamp = Date.now();
  const randomString = Math.random().toString(36).substring(2, 8);
  const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
  return `${prefix}/${timestamp}-${randomString}-${sanitizedName}`;
}

/**
 * Upload file to Hetzner Object Storage via Supabase Edge Function
 */
export async function uploadFile(
  file: File,
  onProgress?: (progress: number) => void
): Promise<UploadResult> {
  // Validate file
  const validation = validateFile(file);
  if (!validation.valid) {
    throw new Error(validation.error);
  }

  try {
    // Create form data
    const formData = new FormData();
    formData.append('file', file);

    // Get Supabase URL for edge function
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const uploadUrl = `${supabaseUrl}/functions/v1/upload-file`;

    // Get auth token
    const { data: { session } } = await supabase.auth.getSession();
    
    // Upload via Supabase Edge Function (secure server-side)
    const response = await fetch(uploadUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${session?.access_token || import.meta.env.VITE_SUPABASE_ANON_KEY}`,
      },
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to upload file');
    }

    const result: UploadResult = await response.json();

    // Simulate progress for UX (since we can't track real progress easily)
    if (onProgress) {
      onProgress(100);
    }

    return result;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to upload file. Please try again.');
  }
}

/**
 * Delete file from storage (would require separate edge function)
 */
export async function deleteFile(key: string): Promise<void> {
  // TODO: Implement delete via Supabase Edge Function if needed
  console.warn('Delete functionality not yet implemented');
  throw new Error('Delete functionality not yet implemented');
}

/**
 * Get file URL from key (files are already returned with full URL from upload)
 */
export function getFileUrl(url: string): string {
  return url;
}


