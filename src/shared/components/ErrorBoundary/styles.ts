import { makeStyles } from '../../../style';

export const useStyles = makeStyles()(() => ({
	mainWrapper: {
		height: '100%',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	errorCode: {
		fontSize: '20vw',
		color: '#d9d9d9',
	},
	errorDescription: {
		fontSize: '2vw',
		color: 'white',
		textAlign: 'center',
	},
}));
