/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        accent: "var(--accent-color)",
        "dark-blue": "var(--dark-blue)",
      },
      fontFamily: {
        sans: ['"Open Sans"', "sans-serif"],
        times: ["Times", "serif"],
      },
      brightness: {
        120: "1.2",
      },
      zIndex: {
        9999: "9999",
        "-999": "-999",
      },
      spacing: {
        128: "32rem",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(0)" },
          "50%": { transform: "translateY(-20px) rotate(3deg)" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(-5px) rotate(-2deg)" },
          "50%": { transform: "translateY(5px) rotate(2deg)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: 1, transform: "scale(1)" },
          "50%": { opacity: 0.9, transform: "scale(0.98)" },
        },
        floating: {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(25px, -25px) scale(1.2)" },
          "66%": { transform: "translate(-25px, 25px) scale(0.8)" },
          "100%": { transform: "translate(0, 0) scale(1)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: 0.4 },
          "50%": { opacity: 0.8 },
        },
        levitate: {
          "0%, 100%": {
            transform: "translateY(0) scale(1) rotate(0deg)",
          },
          "33%": {
            transform: "translateY(-10px) scale(1.02) rotate(1deg)",
          },
          "66%": {
            transform: "translateY(-5px) scale(1.01) rotate(-1deg)",
          },
        },
        "modern-float": {
          "0%": {
            transform: "translateY(0) translateX(0) rotate(0deg) scale(1)",
            opacity: 0,
          },
          "50%": {
            transform:
              "translateY(-40px) translateX(20px) rotate(45deg) scale(1.2)",
            opacity: 1,
          },
          "100%": {
            transform: "translateY(-80px) translateX(0) rotate(0deg) scale(0)",
            opacity: 0,
          },
        },
        orbit: {
          "0%": { transform: "translate(-50%, -50%) rotate(0deg)" },
          "100%": { transform: "translate(-50%, -50%) rotate(360deg)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "float-advanced": {
          "0%, 100%": {
            transform: "translateY(0) rotate(0) scale(1)",
            filter: "brightness(1)",
          },
          "25%": {
            transform: "translateY(-15px) rotate(1deg) scale(1.01)",
            filter: "brightness(1.05)",
          },
          "75%": {
            transform: "translateY(-5px) rotate(-1deg) scale(0.99)",
            filter: "brightness(0.95)",
          },
        },
        "orbit-reverse": {
          "0%": { transform: "translate(-50%, -50%) rotate(0deg)" },
          "100%": { transform: "translate(-50%, -50%) rotate(-360deg)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "pulse-wave": {
          "0%, 100%": { transform: "scale(1)", opacity: 0.5 },
          "50%": { transform: "scale(1.05)", opacity: 0.8 },
        },
        particle: {
          "0%": {
            transform: "translateY(0) translateX(0) rotate(0) scale(1)",
            opacity: 0,
          },
          "50%": {
            transform:
              "translateY(-100px) translateX(100px) rotate(180deg) scale(1.5)",
            opacity: 0.5,
          },
          "100%": {
            transform:
              "translateY(-200px) translateX(0) rotate(360deg) scale(0)",
            opacity: 0,
          },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: 0.3, transform: "scale(1.1)" },
          "50%": { opacity: 0.5, transform: "scale(1)" },
        },
        reflection: {
          "0%": { transform: "translateX(-100%) scaleX(0.5)", opacity: 0 },
          "50%": { transform: "translateX(0%) scaleX(1)", opacity: 1 },
          "100%": { transform: "translateX(100%) scaleX(0.5)", opacity: 0 },
        },
        "smooth-float": {
          "0%, 100%": {
            transform: "translateY(0) scale(1)",
            filter: "brightness(1)",
          },
          "33%": {
            transform: "translateY(-10px) scale(1.01)",
            filter: "brightness(1.05)",
          },
          "66%": {
            transform: "translateY(-5px) scale(0.99)",
            filter: "brightness(0.95)",
          },
        },
        "floating-particle": {
          "0%": {
            transform: "translateY(0) translateX(0) scale(1)",
            opacity: 0,
          },
          "25%": {
            transform: "translateY(-50px) translateX(25px) scale(1.2)",
            opacity: 0.8,
          },
          "75%": {
            transform: "translateY(-100px) translateX(-25px) scale(0.8)",
            opacity: 0.3,
          },
          "100%": {
            transform: "translateY(-150px) translateX(0) scale(0)",
            opacity: 0,
          },
        },
        "morphing-gradient": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "0% 50%",
            "background-image":
              "radial-gradient(circle at 50% 50%, rgba(16,185,129,0.2), transparent)",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "100% 50%",
            "background-image":
              "radial-gradient(circle at 60% 60%, rgba(59,130,246,0.2), transparent)",
          },
        },
        "pulse-fade": {
          "0%, 100%": { opacity: 0.3, transform: "scale(1)" },
          "50%": { opacity: 1, transform: "scale(1.5)" },
        },
        "particle-trail": {
          "0%": { transform: "scaleX(0) rotate(-45deg)", opacity: 0 },
          "50%": { transform: "scaleX(1) rotate(-45deg)", opacity: 1 },
          "100%": { transform: "scaleX(0) rotate(-45deg)", opacity: 0 },
        },
        ripple: {
          "0%": { transform: "scaleX(0.5)", opacity: 0 },
          "50%": { transform: "scaleX(1)", opacity: 1 },
          "100%": { transform: "scaleX(0.5)", opacity: 0 },
        },
        "glow-ripple": {
          "0%, 100%": { transform: "scale(1)", opacity: 0.5 },
          "50%": { transform: "scale(1.1)", opacity: 0.8 },
        },
      },
      animation: {
        "float-slow": "float-slow 6s ease-in-out infinite",
        "bounce-subtle": "bounce-subtle 3s ease-in-out infinite",
        "pulse-subtle": "pulse-subtle 4s ease-in-out infinite",
        floating: "floating 8s ease-in-out infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        levitate: "levitate 6s ease-in-out infinite",
        "modern-float": "modern-float 4s ease-out infinite",
        orbit: "orbit 20s linear infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        "float-advanced": "float-advanced 8s ease-in-out infinite",
        "orbit-reverse": "orbit-reverse 30s linear infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        "pulse-wave": "pulse-wave 4s ease-in-out infinite",
        particle: "particle 8s ease-out infinite",
        "glow-pulse": "glow-pulse 6s ease-in-out infinite",
        reflection: "reflection 3s ease-in-out infinite",
        "smooth-float": "smooth-float 8s ease-in-out infinite",
        "floating-particle": "floating-particle 6s ease-out infinite",
        "morphing-gradient": "morphing-gradient 15s ease-in-out infinite",
        "pulse-fade": "pulse-fade 3s ease-in-out infinite",
        "particle-trail": "particle-trail 2s ease-out infinite",
        ripple: "ripple 3s ease-in-out infinite",
        "glow-ripple": "glow-ripple 5s ease-in-out infinite",
      },
      perspective: {
        1000: "1000px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
