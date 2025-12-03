/** @type {import('tailwindcss').Config} */
export default {
  // This line is the fix. It tells Tailwind to look for the class, not your system settings.
  darkMode: 'selector', 
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}