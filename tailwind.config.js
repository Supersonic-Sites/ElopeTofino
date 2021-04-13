const theme = require('tailwindcss/defaultTheme');

module.exports = {
	important: true, // See https://tailwindcss.com/docs/configuration#important
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
	purge: {
		enabled: process.env.HUGO_ENVIRONMENT === 'production',
    content: [
      './hugo_stats.json',
      './layouts/**/*.html',
		],
		extractors: [
      {
        extractor: (content) => {
					let els = JSON.parse(content).htmlElements;
					return els.tags.concat(els.classes, els.ids);
				},
        extensions: ['json']
      },
    ],
		mode: 'all',
		
	},
  
  theme: {
    extend: {
      fontFamily: {
        serif: [
          '"EB Garamond"',
        ],
        sans: [
          '"EB Garamond"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        'primary': '#7d9172',
        'stars': '#fdcc0d',
        'elope': '#DBAB97',
      },
      screens: {
        '3xl': '2000px',
      }
    },
    fill: theme => ({
      'primary': theme('colors.primary'),
    })
  }
};