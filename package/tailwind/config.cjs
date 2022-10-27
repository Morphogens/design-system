/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	corePlugins: {
		preflight: true,
	},
	plugins: [require('./designSystemPlugin.cjs')],
	content: [
		// Make sure apps using this library don't
		// purge the classes used here.
		'./src/**/*.svelte',
		'./node_modules/design-system/**/*.svelte',
	],

	theme: {
		extend: {
			height: {
				// h-inner-screen is useful on mobile because it excludes the
				// height of the URL bar. If you use 100vh on iOS Safari you
				// can end up placing something behind the browser's URL bar.
				//
				// This CSS variable is set in Theme.svelte.
				'inner-screen': 'var(--window-inner-height)',
			},
			fontSize: {
				standard: '17.5px',
				title: '35px',
				label: '11.5px',
				button: '17.5px',
			},
			fontWeight: {
				standard: '485',
				title: '335',
				label: '700',
				button: '625',
			},
			letterSpacing: {
				standard: '0.047em',
				title: '-0.021em',
				label: '0.095em',
				button: '0.047em',
			},
			borderRadius: {
				grid: '18.75%',
			},
		},
		colors: {
			transparent: 'transparent',
			'twitter-blue': '#1B9DF0',
			'discord-blue': '#5865F2',
			'instagram-pink': '#EA3376',
			gray: {
				0: '#ffffff',
				10: '#F2F0FD',
				20: '#EAE7FB',
				30: '#DAD8EE',
				40: '#B6B4CA',
				50: '#9795A9',
				60: '#6E6C80',
				70: '#5B596B',
				80: '#3C3A4C', // Should be 1C1A2D
				90: '#1C1A2C', // Not present in spec
				100: '#000000',
			},
			blue: {
				10: '#ECEBFB',
				20: '#CDCEF7',
				30: '#ACAEF3',
				40: '#8A8CEB',
				50: '#7371DE',
			},
			cyan: {
				10: '#EBF9FB',
				20: '#CEF1F3',
				30: '#A2EAEE',
				40: '#8ED8E2',
				50: '#7CC0CC',
			},
			chartreuse: {
				10: '#EDFCCD',
				20: '#E1FDAF',
				30: '#D5FA94',
				40: '#C6F475',
				50: '#B9E16A',
			},
			green: {
				10: '#E7FDDC',
				20: '#D5FCC5',
				30: '#C5FCAE',
				40: '#AAF48D',
				50: '#9AE182',
			},
			magenta: {
				10: '#FBE9FD',
				20: '#F3C7FA',
				30: '#EE9FF9',
				40: '#E476F3',
				50: '#D03CE1',
			},
			orange: {
				10: '#FCF5E8',
				20: '#F7E6C3',
				30: '#F7CC88',
				40: '#EAB867',
				50: '#E4A256',
			},
			purple: {
				10: '#EFE6FB',
				20: '#D7C6F6',
				30: '#BD9DF3',
				40: '#A175EB',
				50: '#8B56DD',
			},
			red: {
				10: '#FCEDF0',
				20: '#F7D0D6',
				30: '#F1A0A0',
				40: '#E87B7B',
				50: '#CF5752',
			},
			yellow: {
				10: '#FDFBCC',
				20: '#FEFCB1',
				30: '#F8F381',
				40: '#F6E570',
				50: '#F1CD64',
			},
		},
	},
}
