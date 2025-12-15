import { z } from 'zod'

// Consultation Form Validation Schema
export const consultationSchema = z.object({
  full_name: z
    .string()
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name must not exceed 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Full name can only contain letters, spaces, hyphens, and apostrophes'),
  
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(255, 'Email must not exceed 255 characters')
    .toLowerCase(),
  
  phone: z
    .string()
    .min(8, 'Phone number must be at least 8 characters')
    .max(20, 'Phone number must not exceed 20 characters')
    .regex(/^\+?[0-9\s()-]+$/, 'Please enter a valid phone number with country code'),
  
  current_country: z
    .string()
    .min(1, 'Please select your current country'),
  
  destination_country: z
    .string()
    .min(1, 'Please select your destination country'),
  
  service_type: z
    .string()
    .min(1, 'Please select a service type'),
  
  message: z
    .string()
    .max(1000, 'Message must not exceed 1000 characters')
    .optional()
    .or(z.literal('')),
})

export type ConsultationFormData = z.infer<typeof consultationSchema>

// Contact Form Validation (for future use)
export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export type ContactFormData = z.infer<typeof contactSchema>



