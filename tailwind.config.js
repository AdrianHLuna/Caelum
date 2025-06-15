// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        tertiary: "var(--tertiary)",
        "tertiary-foreground": "var(--tertiary-foreground)",
        // También puedes declarar los otros si los usas:
        destructive: "var(--destructive)",
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        // etc.
      },
    },
  },
}
