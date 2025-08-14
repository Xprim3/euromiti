/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xl': '1210px',
      },
      colors: {
        // Brand Colors
        'brand': {
          primary: '#1e40af',        // Deep Blue
          secondary: '#059669',      // Green
          accent: '#dc2626',         // Red
          warning: '#d97706',        // Orange
          white: '#ffffff',
          light: '#f8fafc',
          'light-gray': '#e2e8f0',
          gray: '#64748b',
          'dark-gray': '#334155',
          black: '#0f172a',
          dark: '#0f172a',
        },
        // Fuel-specific colors
        'fuel': {
          gasoline: '#dc2626',
          diesel: '#1e40af',
          lpg: '#059669',
          electric: '#7c3aed',
        }
      },
      fontFamily: {
        'brand-primary': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'brand-secondary': ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'brand-mono': ['JetBrains Mono', 'Fira Code', 'Monaco', 'Cascadia Code', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',    // 72px
        '88': '22rem',     // 352px
        '128': '32rem',    // 512px
      },
      borderRadius: {
        '4xl': '2rem',     // 32px
        '5xl': '2.5rem',   // 40px
      },
      boxShadow: {
        'brand': '0 4px 6px -1px rgba(30, 64, 175, 0.1), 0 2px 4px -2px rgba(30, 64, 175, 0.1)',
        'brand-lg': '0 10px 15px -3px rgba(30, 64, 175, 0.1), 0 4px 6px -4px rgba(30, 64, 175, 0.1)',
        'brand-xl': '0 20px 25px -5px rgba(30, 64, 175, 0.1), 0 8px 10px -6px rgba(30, 64, 175, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
