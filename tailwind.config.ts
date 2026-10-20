import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			sm: "375px",
			md: "768px",
			lg: "1200px",
			// Raw tablet queries disable automatic max-* variants, so keep mobile explicit.
			"max-md": {
				max: "767.98px",
			},
			tablet: {
				raw: "(min-width: 768px) and (max-width: 1199.98px), (min-width: 768px) and (pointer: coarse)",
			},
			"tablet-portrait": {
				raw: "(min-width: 600px) and (orientation: portrait) and (pointer: coarse)",
			},
			"tablet-landscape": {
				raw: "(min-width: 768px) and (orientation: landscape) and (pointer: coarse)",
			},
			desktop: {
				raw: "(min-width: 1200px) and (pointer: fine)",
			},
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				md: "2rem",
			},
		},
		extend: {
			fontFamily: {
				sans: "var(--font-sans)",
				serif: "var(--font-serif)",
			},
			animation: {
				"ping-large": "ping-large 1s ease-in-out infinite",
				"move-left": "move-left 1s linear infinite",
				"move-right": "move-right 1s linear infinite",
			},
			keyframes: {
				"ping-large": {
					"75%, 100%": {
						transform: "scale(3)",
						opacity: "0",
					},
				},
				"move-left": {
					"0%": { transform: "translateX(0%)" },
					"100%": { transform: "translateX(-50%)" },
				},
				"move-right": {
					"0%": { transform: "translateX(-50%)" },
					"100%": { transform: "translateX(0%)" },
				},
			},
		},
	},
	plugins: [],
};
export default config;
