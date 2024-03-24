import { makeStyles } from '../../style';

export const useGlobalStyles = makeStyles()(() => ({
	'*': {
		boxSizing: 'border-box',
		padding: 0,
		margin: 0,
	},
	container: {
		maxWidth: '1920px',
		boxSizing: 'content-box',
		margin: '0 auto',
		'@media (max-width: 1920px)': {
			maxWidth: '100%',
			padding: '0 15px',
		},
	},
	pageMargin: {
		margin: '100px auto 0 auto !important',
	},
}));
