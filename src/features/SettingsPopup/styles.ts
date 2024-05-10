import { makeStyles } from '../../style';

export const useStyles = makeStyles()(() => ({
	popup: {
		gap: '48px',
		top: '50px',
		right: '50px',
		width: '475px',
		height: '580px',
		display: 'flex',
		borderRadius: '15px',
		alignItems: 'center',
		position: 'absolute',
		flexDirection: 'column',
		justifyContent: 'center',
		background: 'rgb(19, 19, 17)',
		transition: '0.6s'
	},
	username: {
		fontSize: '44px',
		color: '#fff',
	},
	email: {
		fontSize: '24px',
		color: 'rgba(242, 242, 242, 45%)',
	},
	detailsContainer: {
		fontFamily: 'Jost, sans-serif',
		display: 'flex',
		flexDirection: 'column',
		gap: '8px',
	},
	buttons: {
		display: 'flex',
		flexDirection: 'column',
		gap: '15px',
	},
	button: {
		padding: '10px 20px',
		textAlign: 'center',
		height: 'auto'
	}
}));
