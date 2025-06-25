/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Primary dark theme colors
        dark: {
          DEFAULT: '#0d1117',
          lighter: '#1c2331',
          light: '#2a3446',
        },
        // Accent colors
        accent: {
          purple: {
            DEFAULT: '#8b5cf6',
            light: '#a78bfa',
            dark: '#7c3aed',
          },
          blue: {
            DEFAULT: '#3b82f6',
            light: '#60a5fa',
            dark: '#2563eb',
          },
        },
      },
      animation: {
        'text-gradient': 'text-gradient 1.5s linear infinite',
        'border-gradient': 'border-gradient 3s linear infinite',
      },
      keyframes: {
        'text-gradient': {
          to: { backgroundPosition: '200% center' }
        },
        'border-gradient': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      transitionProperty: {
        'width': 'width',
        'spacing': 'margin, padding',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};