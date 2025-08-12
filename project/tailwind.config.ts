import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'zemenay': ['Archiv Grotesk Zemenay', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: '#000000',
        foreground: '#FFFFFF',
        card: {
          DEFAULT: '#000000',
          foreground: '#FFFFFF',
        },
        popover: {
          DEFAULT: '#000000',
          foreground: '#FFFFFF',
        },
        primary: {
          DEFAULT: '#DC2626',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#1F1F1F',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#1F1F1F',
          foreground: '#CCCCCC',
        },
        accent: {
          DEFAULT: '#DC2626',
          foreground: '#FFFFFF',
        },
        destructive: {
          DEFAULT: '#DC2626',
          foreground: '#FFFFFF',
        },
        border: '#333333',
        input: '#1F1F1F',
        ring: '#DC2626',
        chart: {
          '1': '#DC2626',
          '2': '#B91C1C',
          '3': '#991B1B',
          '4': '#7F1D1D',
          '5': '#450A0A',
        },
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
