/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        linen:    '#FAF7F2',
        cream:    '#F2EDE4',
        sand:     '#E8DDD0',
        stone:    '#C4B8A8',
        bark:     '#8C7B6B',
        earth:    '#5C4A3A',
        charcoal: '#2C2420',
        ink:      '#1A1410',
        copper:   '#B87333',
        sage:     '#8A9E85',
      },
      fontFamily: {
        serif:   ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['3.5rem', { lineHeight: '1.1',  letterSpacing: '-0.01em' }],
        'display-md': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      transitionTimingFunction: {
        'elegant': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'slide':   'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%':   { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in':       'fadeIn 0.4s ease-out forwards',
        'slide-up':      'slideUp 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
        'slide-in-right':'slideInRight 0.4s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
      },
    },
  },
  plugins: [],
}
