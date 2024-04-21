import { makeStyles } from '../../../style';

export const useStyles = makeStyles()(() => ({
	branches__blockForTop: {
		width: '90%',
		margin: '0 auto',
		alignSelf: 'center',
	},
	branches__blockForTopItem: {
		color: '#D9D9D9',
		textAlign: 'center',
		span: {
			cursor: 'pointer',
		},
	},
	branches__blockForTopWrapper: {
		height: '55px',
		display: 'flex',
		borderBottom: '4px solid #D9D9D9',
		marginTop: '50px',
	},
	branches__blockForBottomWrapper: {
		display: 'flex',
	},
	branches__blockForBottom: {
		width: '90%',
		margin: '0 auto',
		alignSelf: 'center',
	},
	branches__blockForBottomItem: {
		display: 'block',
		textDecoration: 'none',
		color: '#D9D9D9',
		textAlign: 'right',
		paddingRight: '15px',
		position: 'relative',
		'::before': {
			content: '\'\'',
			position: 'absolute',
			top: '0px',
			left: '0px',
			right: '2px',
			bottom: '0px',
			borderRight: '2px solid #D9D9D9',
		},
		' span': {
			fontSize: '40px',
		},
	},
	content: {
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '25px',
	},
	image: {
		width: '90%',
		textAlign: 'center',
		'img': {
			maxWidth: '100%',
			margin: '0 auto',
		},
		position: 'relative'
	},
	darkImg: {
		opacity: '0.3',
	},
	branches__contentDescription: {
		position: 'absolute',
		bottom: '30px',
		zIndex: '1000',
		left: '50%',
		transform: 'translateX(-50%)',
		transition: 'opacity 0.3s ease',
		opacity: '0',
		'.visibleDescription': {
			opacity: '1'
		}
	},
	visibleDescription: {
		opacity: '1'
	},
	branches__contentDescriptionTitle: {
		fontSize: '20px',
		fontWeight: '700',
		marginBottom: '15px'
	},
	branches__contentDescriptionText: {
		fontSize: '16px',
		fontWeight: '400'
	}
}));
