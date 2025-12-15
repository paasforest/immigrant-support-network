import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';

// Initialize S3 client for Hetzner Object Storage
const s3Client = new S3Client({
  endpoint: import.meta.env.VITE_S3_ENDPOINT,
  region: import.meta.env.VITE_S3_REGION,
  credentials: {
    accessKeyId: import.meta.env.VITE_S3_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.VITE_S3_SECRET_ACCESS_KEY,
  },
  forcePathStyle: true, // Required for Hetzner Object Storage
});

const BUCKET_NAME = import.meta.env.VITE_S3_BUCKET_NAME;
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
 * Upload file to Hetzner Object Storage
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

  const key = generateFileKey(file);

  try {
    const upload = new Upload({
      client: s3Client,
      params: {
        Bucket: BUCKET_NAME,
        Key: key,
        Body: file,
        ContentType: file.type,
        // Make files private by default
        ACL: 'private',
      },
    });

    // Track upload progress
    if (onProgress) {
      upload.on('httpUploadProgress', (progress) => {
        if (progress.loaded && progress.total) {
          const percentage = Math.round((progress.loaded / progress.total) * 100);
          onProgress(percentage);
        }
      });
    }

    await upload.done();

    // Generate the file URL
    const url = `${import.meta.env.VITE_S3_ENDPOINT}/${BUCKET_NAME}/${key}`;

    return {
      url,
      key,
      size: file.size,
    };
  } catch (error) {
    console.error('Error uploading file:', error);
    throw new Error('Failed to upload file. Please try again.');
  }
}

/**
 * Delete file from storage
 */
export async function deleteFile(key: string): Promise<void> {
  try {
    const command = new DeleteObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
    });

    await s3Client.send(command);
  } catch (error) {
    console.error('Error deleting file:', error);
    throw new Error('Failed to delete file');
  }
}

/**
 * Get file URL from key
 */
export function getFileUrl(key: string): string {
  return `${import.meta.env.VITE_S3_ENDPOINT}/${BUCKET_NAME}/${key}`;
}

