import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      spacing: {
        "1/2": "50%",
      },
      clipPath: {
        'triangle': 'polygon(50% 0%, 0% 100%, 100% 100%)',
      },
      colors: {
        "soft-red": "hsl(7, 99%, 70%)",
        "yellow": "hsl(51, 100%, 49%)",
        "graphic-design-text": "hsl(167, 40%, 24%)",
        "photography-text": "hsl(198, 62%, 26%)",
        "footer": "#2C7566",
        "very-dark-desaturated-blue": "hsl(212, 27%, 19%)",
        "very-dark-grayish-blue": "hsl(213, 9%, 39%)",
        "dark-grayish-blue": "hsl(232, 10%, 55%)",
        "grayish-blue": "hsl(210, 4%, 67%)",
      },
      fontFamily: {
        fraunces: ["Fraunces", ...fontFamily.sans],
        barlow: ["Barlow", ...fontFamily.sans],
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: (utilities: Record<string, any>) => void }) {
      const newUtilities = {
        '.triangle::before': {
          content: "''",
          position: 'absolute',
          top: '0',
          right: '0',
          borderTop: '50px solid transparent',
          borderLeft: '20px solid transparent',
          borderRight: '40px solid white',
        },
      };
      addUtilities(newUtilities);
    },
  ],
} satisfies Config;
