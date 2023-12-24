/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: `Poppins, 'IBM Plex Sans Thai Looped', sans-serif`,
			},
			container: {
				screens: {
					sm: '640px',
					md: '768px',
					lg: '1024px',
					xl: '1280px',
					'2xl': '1280px',
				}
			},
			colors: {
				'space-cadet': '#173057',
				'celestial-blue': '#518ECB',
				bittersweet: '#F26A5D',
				'light-gray': '#D3D3D3',
				'main-bg': '#d9e6f2'
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
