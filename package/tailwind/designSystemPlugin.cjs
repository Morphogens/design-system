// Tailwind plugin that includes extensions specific to the Morphogen design system.
const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, addBase, addUtilities, theme }) {
	addBase({
		'@font-face': {
			'font-family': 'ABC Maxi Round Variable',
			src: `
				local('ABCMaxiRoundVariable'),
				url('https://artbreeder-deployments.b-cdn.net/fonts/ABCMaxiRoundVariable.woff2') format('woff2'),
				url('https://artbreeder-deployments.b-cdn.net/fonts/ABCMaxiRoundVariable.woff') format('woff'),
				url('https://artbreeder-deployments.b-cdn.net/fonts/ABCMaxiRoundVariable.ttf') format('truetype');
				`,
			'font-weight': '200 700',
			'font-style': 'normal',
		},
	})

	// ['gray', 'green', ...]
	const colorNames = Object.keys(theme('colors'))
	// controlComponents looks like this:
	//
	// {
	//   '.bg-hover-active-green': {
	//     '@apply bg-green-30 hover:bg-green-20 active:bg-green-40': {},
	//   }
	// }
	//
	// This slightly funny syntax is how you use @apply when creating component classes in plugins.
	const controlComponents = {}
	for (const colorName of colorNames) {
		const className = '.bg-hover-active-' + colorName
		const selector = `@apply bg-${colorName}-30 hover:bg-${colorName}-20 active:bg-${colorName}-40`
		controlComponents[className] = {
			[selector]: {},
		}
	}

	addComponents(
		{
			...controlComponents,
			'.text-2xl-head': {
				'font-size': '105px',
				'font-weight': '200',
				'letter-spacing': '-0.05em',
				'line-height': '104px',
				'font-feature-settings': 'ss01 !important', // Enable heavy variant of Maxi.
			},

			'.text-xl-head': {
				'font-size': '78px',
				'font-weight': '250',
				'letter-spacing': '-0.04em',
				'line-height': '80px',
				'font-feature-settings': 'ss01', // Enable heavy variant of Maxi.
			},

			'.text-l-head': {
				'font-size': '52px',
				'font-weight': '300',
				'letter-spacing': '-0.03em',
				'line-height': '52px',
				'font-feature-settings': 'ss01', // Enable heavy variant of Maxi.
			},

			'.text-m-head': {
				'font-size': '35px',
				'font-weight': '350',
				'letter-spacing': '-0.02em',
				'line-height': '36px',
				'font-feature-settings': 'ss01', // Enable heavy variant of Maxi.
			},

			'.text-s-head': {
				'font-size': '26px',
				'font-weight': '400',
				'letter-spacing': '-0.01em',
				'line-height': '28px',
			},

			'.text-xs-head': {
				'font-size': '18px',
				'font-weight': '400',
				'letter-spacing': '0.01em',
				'line-height': '20px',
			},

			'.text-l-label': {
				'font-size': '52px',
				'font-weight': '300',
				'letter-spacing': '-0.03em',
				'line-height': '52px',
				'font-feature-settings': 'ss01', // Enable heavy variant of Maxi.
			},

			'.text-m-label': {
				'font-size': '35px',
				'font-weight': '350',
				'letter-spacing': '-0.02em',
				'line-height': '36px',
				'font-feature-settings': 'ss01', // Enable heavy variant of Maxi.
			},

			'.text-s-label': {
				'font-size': '26px',
				'font-weight': '400',
				'letter-spacing': '-0.01em',
				'line-height': '28px',
			},

			'.text-xs-label': {
				'font-size': '18px',
				'font-weight': '400',
				'letter-spacing': '0.01em',
				'line-height': '20px',
			},

			'.text-l-label': {
				'font-size': '52px',
				'font-weight': '300',
				'letter-spacing': '-0.03em',
				'line-height': '52px',
			},

			'.text-m-label': {
				'font-size': '35px',
				'font-weight': '350',
				'letter-spacing': '-0.02em',
				'line-height': '36px',
				'font-feature-settings': 'ss01', // Enable heavy variant of Maxi.
			},

			'.text-s-paragraph': {
				'font-size': '26px',
				'font-weight': '400',
				'letter-spacing': '-0.01em',
				'line-height': '28px',
			},

			'.text-xs-paragraph': {
				'font-size': '18px',
				'font-weight': '400',
				'letter-spacing': '0.01em',
				'line-height': '20px',
			},

			'.text-l-smallcaps': {
				'font-size': '34.25px',
				'font-weight': '470',
				'line-height': '52px',
				'text-transform': 'uppercase',
			},

			'.text-m-smallcaps': {
				'font-size': '23px',
				'font-weight': '600',
				'line-height': '24px',
				'text-transform': 'uppercase',
			},

			'.text-s-smallcaps': {
				'font-size': '17px',
				'font-weight': '650',
				'letter-spacing': '0.02em',
				'line-height': '20px',
				'text-transform': 'uppercase',
			},

			'.text-xs-smallcaps': {
				'font-size': '12px',
				'font-weight': '600',
				'letter-spacing': '0.04em',
				'line-height': '16px',
				'text-transform': 'uppercase',
			},

			'.text-s-indent': {
				'font-size': '26px',
				'font-weight': '400',
				'letter-spacing': '-0.01em',
				'line-height': '28px',
			},

			'.text-xs-indent': {
				'font-size': '18px',
				'font-weight': '400',
				'letter-spacing': '0.01em',
				'line-height': '20px',
			},

			'.rounded-pill': {
				'@apply rounded-[72px] lg:rounded-[1024px]': {},
			},

			'.border-pill': {
				'@apply box-content border-8 border-solid border-gray-90 dark:border-gray-80 !important':
					{},
			},
		},
		['responsive']
	)

	addComponents(
		{
			control: (value) => {
				return {
					[`@apply bg-${value}-30 hover:bg-${value}-20 active:bg-${value}-40`]: {},
				}
			},
		},
		{ values: theme('colors') }
	)

	addUtilities(
		{
			'.scrollbar-hide': {
				'-ms-overflow-style': 'none' /* IE and Edge */,
				'scrollbar-width': 'none' /* Firefox */,
				'&::-webkit-scrollbar': { display: 'none' } /* Safari and Chrome */,
			},

			'.scrollbar-default': {
				'-ms-overflow-style': 'auto' /* IE and Edge */,
				'scrollbar-width': 'auto' /* Firefox */,
				'&::-webkit-scrollbar': { display: 'block' } /* Safari and Chrome */,
			},

			'.sentence-case': {
				textTransform: 'lowercase',
			},

			'.sentence-case:first-letter': {
				textTransform: 'uppercase',
			},
		},
		['responsive', 'hover']
	)
})
