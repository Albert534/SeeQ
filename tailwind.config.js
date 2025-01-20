/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				notos: ['Noto Sans'],
				'notos-mm': ['Noto Sans Myanmar'],
			},

			boxShadow: {
				'custom-zero': '0 0 10px rgba(0, 0, 0, 0.5)',
			},
			colors: {
				'primary-main': '#3D3BF3',
				'primary-pale': '#6B69F6',
				'primary-thick': '#2826CB',
				'input-bg': '#3F3F46',
				'bg-main': '#1e1e1e',
			},
		},
	},
	plugins: [],
};
