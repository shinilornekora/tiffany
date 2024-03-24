import { makeStyles } from '../../../style';

export const useStyles = makeStyles()(() => ({
	'popup': {
		position: 'absolute',
		top: '50px',
		right: '50px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		gap: '48px',
		background: 'rgb(19, 19, 17)',
		width: '475px',
		height: '580px',
		borderRadius: '15px'
	},
	'username': {
		fontSize: '44px',
		color: '#fff',
	},
	'email': {
		fontSize: '24px',
		color: 'rgba(242, 242, 242, 45%)',
	},
	'detailsContainer': {
		fontFamily: 'Jost, sans-serif',
		display: 'flex',
		flexDirection: 'column',
		gap: '8px',
	},
	'buttons': {
		display: 'flex',
		flexDirection: 'column',
		gap: '15px'
	}
}));
