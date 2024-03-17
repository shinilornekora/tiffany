import { makeStyles } from '../../../style';

export const useStyles = makeStyles()(() => ({
	branches__blockForTop: {
		width: '90%',
		margin: '0 auto',
		alignSelf: 'center'
	},
	branches__blockForTopItem: {
		color: '#D9D9D9',
		textAlign: 'center',
		'span': {
			cursor: 'pointer'
		}
	},
	branches__blockForTopWrapper: {
		height: '55px',
		display: 'flex',
		borderBottom: '4px solid #D9D9D9',
		marginTop: '50px'
	},
	branches__blockForBottomWrapper: {
		height: 'calc(100vh - 105px)',
		display: 'flex'
	},
	branches__blockForBottom: {
		width: '90%',
		margin: '0 auto',
		alignSelf: 'center'
	},
	branches__blockForBottomItem: {
		display: 'block',
		textDecoration: 'none',
		color: '#D9D9D9',
		textAlign: 'right',
		paddingRight: '15px',
		height: 'calc(100vh - 150px)',
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
		}
	},
	content: {
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '25px'
	},
	image: {
		width: '90%',
		height: '80%'
	}
}));