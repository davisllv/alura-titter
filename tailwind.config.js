/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-pattern": "url('/assets/login-user-image.jpg')",
      },
      fontFamily: {
        "fira-sans": "Fira Sans, sans-serif",
      },
      height: {
        "55%": "55%",
      },
      backgroundColor: {
        "post-page": "#F3F4F6",
      },
    },
  },
  plugins: [],
};
