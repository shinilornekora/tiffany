import { makeStyles } from '../../style';

export const useGlobalStyles = makeStyles()(() => ({
	'*': {
		background: 'none repeat scroll 0 0 transparent',
		border: 'medium none',
		borderSpacing: 0,
		color: '#26589F',
		fontFamily: '\'PT Sans Narrow\', sans-serif',
		fontSize: '16px',
		fontWeight: 'normal',
		lineHeight: '1.42rem',
		listStyle: 'none outside none',
		margin: 0,
		padding: 0,
		textAlign: 'left',
		textDecoration: 'none',
		textIndent: 0,
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
	button: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: '20px',
		color: '#fff',
		width: '200px',
		height: '50px',
		borderRadius: '15px',
		textDecoration: 'none',
		backgroundColor: '#2E2D2D',
		cursor: 'pointer',
	},
}));
