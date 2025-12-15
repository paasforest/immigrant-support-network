/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0066cc',
          hover: '#0052a3',
          light: '#3385d6',
          dark: '#004080',
        },
        secondary: {
          DEFAULT: '#00a86b',
          hover: '#008c59',
          light: '#33ba85',
        },
        text: {
          dark: '#1a1a1a',
          medium: '#4a4a4a',
          light: '#6a6a6a',
        },
        bg: {
          light: '#f8f9fa',
          white: '#ffffff',
        },
        border: {
          DEFAULT: '#e0e0e0',
        },
        error: '#dc3545',
        success: '#28a745',
      },
      boxShadow: {
        'sm': '0 2px 4px rgba(0, 0, 0, 0.05)',
        'md': '0 4px 12px rgba(0, 0, 0, 0.1)',
        'lg': '0 8px 24px rgba(0, 0, 0, 0.15)',
      },
      spacing: {
        'xs': '8px',
        'sm': '16px',
        'md': '24px',
        'lg': '32px',
        'xl': '48px',
        'xxl': '64px',
      },
    },
  },
  plugins: [],
}


