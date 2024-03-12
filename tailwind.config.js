/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: "#030712",
			white: "#ffffff",
			bgColor: "#EFF6FF",
			navyblue: "#0D2167",
			paleblue: "#5A6793",
			disableText: "#9CA3AF",
			disableInput: "#E5E7EB",
			unfilledInput: "#E3E5F1",
		},
	},
	plugins: [require("daisyui")],
};
