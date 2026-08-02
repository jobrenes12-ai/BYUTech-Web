/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        cyberDark: '#0B0F19',
        cyberCard: '#151D30',
        cyberNeon: '#00F0FF',
        cyberPurple: '#9D4EDD'
      },
      boxShadow: {
        neonGlow: '0 0 15px rgba(0, 240, 255, 0.4)',
        purpleGlow: '0 0 15px rgba(157, 78, 221, 0.4)'
      }
    }
  },
  plugins: [],
};