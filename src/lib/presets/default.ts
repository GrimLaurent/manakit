import type { Preset } from '../types/preset';

const preset: Preset = {
	dark: false,
	colors: {
		primary: {
			light: '#6750A4',
			dark: '#D0BCFF'
		},
		error: { light: '#B3261E', dark: '#F2B8B5' },
		warning: { light: '#fdb400', dark: '#fdb400' },
		success: { light: '#4caf50', dark: '#4caf50' },
		info: { light: '#2196f3', dark: '#2196f3' },
		text: {
			light: '#010101',
			dark: '#FDFDFD'
		},
		background: {
			light: '#FEFEFE',
			dark: '#202020'
		},
		surface: {
			light: '#F6F6F8',
			dark: '#2C2D33'
		},
		divider: {
			light: '#ebeced',
			dark: '#2e333b'
		},
		shadow: '#0d0d0d'
	},
	fontFamily: {},
	screens: {
		sm: '640px',
		md: '768px',
		lg: '1024px',
		xl: '1280px',
		xxl: '1536px'
	},
	borderRadius: {
		none: '0px',
		sm: '0.125rem',
		null: '0.25rem',
		lg: '0.375rem',
		xl: '0.5rem',
		'2xl': '0.75rem',
		full: '9999px',
		circle: '50%'
	},
	variables: {
		display: {
			none: 'none',
			inline: 'inline',
			'inline-block': 'inline-block',
			block: 'block',
			table: 'table',
			'table-cell': 'table-cell',
			'table-row': 'table-row',
			flex: 'flex',
			'inline-flex': 'inline-flex'
		},
		shadow: {
			sm: ['0 1px 2px 0'],
			null: ['0 1px 3px 0', '0 1px 2px -1px'],
			md: ['0 4px 6px -1px', '0 2px 4px -2px'],
			lg: ['0 10px 15px -3px', '0 4px 6px -4px'],
			xl: ['0 20px 25px -5px', '0 8px 10px -6px'],
			xxl: ['0 25px 50px -12px'],
			inner: ['inset 0 2px 4px 0'],
			none: ['0 0']
		},
		grids: 12,
		margin: ['auto', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
		padding: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
		flex: {
			flex: 'flex',
			'inline-flex': 'inline-flex'
		},
		alignContent: {
			start: 'flex-start',
			end: 'flex-end',
			center: 'center',
			'space-between': 'space-evenly',
			'space-around': 'space-around',
			'space-evenly': 'space-evenly',
			stretch: 'space-evenly'
		},
		flexShorthand: {
			fill: '1 1 auto',
			'1-1': '1 1 auto',
			'1-0': '1 0 auto',
			'0-1': '0 1 auto',
			'0-0': '0 0 auto',
			'1-1-100': '1 1 100%',
			'1-0-100': '1 0 100%',
			'0-1-100': '0 1 100%',
			'0-0-100': '0 0 100%'
		},
		flexDirection: {
			row: 'row',
			column: 'column',
			'row-reverse': 'row-reverse',
			'column-reverse': 'column-reverse'
		},
		flexJustify: {
			start: 'flex-start',
			end: 'flex-end',
			center: 'center',
			'space-between': 'space-between',
			'space-around': 'space-around',
			'space-evenly': 'space-evenly'
		},
		flexAlign: {
			start: 'flex-start',
			end: 'flex-end',
			center: 'center',
			baseline: 'baseline',
			stretch: 'stretch'
		},
		flexAlignSelf: {
			start: 'flex-start',
			end: 'flex-end',
			center: 'center',
			baseline: 'baseline',
			stretch: 'stretch',
			auto: 'auto'
		},
		flexWrap: {
			nowrap: 'nowrap',
			wrap: 'wrap',
			'wrap-reverse': 'wrap-reverse'
		},
		flexGrowShrink: {
			'grow-0': 0,
			'grow-1': 1,
			'shrink-0': 0,
			'shrink-1': 1
		},
		float: {
			start: 'inline-start',
			end: 'inline-end',
			right: 'right',
			left: 'left',
			none: 'none'
		},
		order: {
			first: '-1',
			'0': 0,
			'1': 1,
			'2': 2,
			'3': 3,
			'4': 4,
			'5': 5,
			'6': 6,
			'7': 7,
			'8': 8,
			'9': 9,
			'10': 10,
			'11': 11,
			'12': 12,
			last: 13
		},
		height: {
			auto: 'auto',
			screen: '100dvh',
			'0': 0,
			'25': '25%',
			'50': '50%',
			'75': '75%',
			'100': '100%'
		},
		width: {
			auto: 'auto',
			'0': 0,
			'25': '25%',
			'50': '50%',
			'75': '75%',
			'100': '100%'
		},
		textAlign: {
			left: 'left',
			right: 'right',
			center: 'center',
			justify: 'justify',
			start: 'start',
			end: 'end'
		},
		textDecoration: {
			none: 'none',
			'line-through': 'line-through',
			overline: 'overline',
			underline: 'underline'
		},
		textOpacity: {
			'high-emphasis': '1',
			'medium-emphasis': '0.7',
			disabled: '0.38'
		},
		textTransform: {
			lowercase: 'lowercase',
			uppercase: 'uppercase',
			capitalize: 'capitalize',
			none: 'none'
		},
		fontEmphasis: {
			black: '900',
			bold: '700',
			medium: '500',
			regular: '400',
			light: '300',
			thin: '100'
		}
	}
};

export default preset;
