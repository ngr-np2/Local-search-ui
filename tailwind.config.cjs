/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  theme: {
    extend: {},
    fontFamily: {
      "font-1": ["Bungee", "cursive"],
      "font-2": ["Carter One", "cursive"],
      "font-3": ["Orbitron", "sans-serif"],
      "f-light-cyber": ["Orbitron", "sans-serif"],
      "font-4": ["Pridi", "serif"],
      "font-5": ["Rubik Mono One", "sans-serif"],
      "font-6": ["Volkhov", "serif"],
      "font-7": ["Abril Fatface", "cursive"],
      "font-8": ["Crimson Text", "serif"],
      "font-9": ["Lobster", "cursive"],
      "f-cursive": ["Lobster", "cursive"],
      "font-10": ["Rampart One", "cursive"],
      "f-white-shadow": ["Rampart One", "cursive"],
      "font-11": ["Russo One", "sans-serif"],
      "f-bold-cyber": ["Russo One", "sans-serif"],
      "font-12": ["Shadows Into Light", "cursive"],
      "f-hanwriting-cursive": ["Shadows Into Light", "cursive"],
    },
    keyframes: {
      shake: {
        "10% , 90%": {
          transform: "translate3d(0, -1px, 0)",
        },

        "20%, 80%": {
          transform: "translate3d(0, 2px, 0)",
        },

        "30%, 50%, 70%": {
          transform: "translate3d(0, -4px, 0)",
        },

        "40%, 60%": {
          transform: "translate3d(0, 4px, 0)",
        },
      },
      bounce: {
        "0%": { transform: "scale(1,1)    translateY(0)" },

        "20%": { transform: "scale(1.1,.9) translateY(0)" },

        "40%": { transform: "scale(.9,1.1) translateY(-10px)" },

        "60%": { transform: "scale(1,1)    translateY(0)" },

        "87%": { transform: "scale(1,1)    translateY(-2px)" },

        "94%": { transform: "scale(1,1)    translateY(0)" },

        "100%": { transform: "scale(1,1)    translateY(0)" },
      },
      spin: {
        'from': {
          transform: 'rotate(0deg)',
        },
        'to': {
          transform: 'rotate(360deg)'
        }
      },
    },
    animation: {
      "loading-circle": "spin 1s linear infinite",
      "bounce": "bounce 0.82s cubic-bezier(.36,.07,.19,.97) both",
      "shake": "shake 1s"
    },
  },
  plugins: [],
};
