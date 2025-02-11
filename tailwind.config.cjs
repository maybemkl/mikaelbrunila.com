function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["selector", "[data-theme='dark']"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    // Remove the following screen breakpoint or add other breakpoints
    // if one breakpoint is not enough for you
    screens: {
      sm: "640px",
    },

    extend: {
      textColor: {
        skin: {
          base: withOpacity("--color-text-base"),
          accent: withOpacity("--color-accent"),
          inverted: withOpacity("--color-fill"),
        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity("--color-fill"),
          accent: withOpacity("--color-accent"),
          inverted: withOpacity("--color-text-base"),
          card: withOpacity("--color-card"),
          "card-muted": withOpacity("--color-card-muted"),
        },
      },
      outlineColor: {
        skin: {
          fill: withOpacity("--color-accent"),
        },
      },
      borderColor: {
        skin: {
          line: withOpacity("--color-border"),
          fill: withOpacity("--color-text-base"),
          accent: withOpacity("--color-accent"),
        },
      },
      fill: {
        skin: {
          base: withOpacity("--color-text-base"),
          accent: withOpacity("--color-accent"),
        },
        transparent: "transparent",
      },
      stroke: {
        skin: {
          accent: withOpacity("--color-accent")
        }
      },
      fontFamily: {
        //mono: ["Classic Serif", "monospace"],
        body: ['Inter', 'sans-serif'],
        code: ['Menlo', 'monospace'],
        heading: ['Montserrat', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            // Apply the body font for general text
            fontFamily: 'Inter, sans-serif',
            // Specifically style <code> elements
            code: {
              fontFamily: 'Menlo, monospace',
              color: false,
            },
            pre: {
              fontFamily: 'Menlo, monospace',
              color: false,
              width: '100%',
              maxWidth: '100%',
              minWidth: '100%',
              margin: 0,
              padding: '1rem',
              overflowX: 'auto',
              boxSizing: 'border-box',
            },
            'pre code': {
              display: 'block',
              width: '100%',
              minWidth: '100%',
              whiteSpace: 'pre',},
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
