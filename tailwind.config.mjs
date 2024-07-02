/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'], // для веб-шрифтов
				museo: ['Museo', 'sans-serif'], // для локальных шрифтов
			},
		},

		plugins: [],

	}
}