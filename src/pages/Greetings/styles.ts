import { makeStyles } from '../../style';

export const useStyles = makeStyles()(() => ({
	flex__wrapper: {
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
	},
	startInputWrapper: {
		display: 'flex',
		flexDirection: 'column',
		gap: '15px',
		alignItems: 'center',
	},
	bg__container: {
		width: '100%',
		height: '100vh',
	},
	bg__overlay: {},
	bg__player: {
		width: '100vw',
		height: '99vh',
		objectFit: 'cover',
	},
	wrapper: {},
}));
