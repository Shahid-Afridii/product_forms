
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          '0%, 100%': {
            transform: 'translateY(0) scale(1)',
          },
          '50%': {
            transform: 'translateY(-20%) scale(1.05)',
          },
        },
      },
      animation: {
        blob: 'blob 20s infinite',
        'slow-blob': 'blob 30s infinite',
        'fast-blob': 'blob 10s infinite',
      },
    },
  },
  plugins: [],
}

