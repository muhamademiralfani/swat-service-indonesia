/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandRed: "#ed1a23",   // Merah Aksen
        brandNavy: "#171263",  // Navy Utama
        accent: "#F4F7FA",     // Background abu-abu sangat muda
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'], // Untuk kesan elegan korporat
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}