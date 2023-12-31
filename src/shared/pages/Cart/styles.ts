import { makeStyles } from '../../../style';

export const useStyles = makeStyles()(() => ({
	cardWrapper: {
		margin: '15px',
		borderRadius: '6px',
		border: '1px solid #FFF',
		display: 'flex',
		flexDirection: 'row',
		color: 'white',
		padding: '10px 0'
	},
	cardDescription: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginLeft: '15px',
		gap: '10px',
	},
	nameBlock: {
		fontSize: '34px',
		alignSelf: 'flex-start',
	},
	priceAndActionBlock: {
		display: 'flex',
		flexDirection: 'row',
	},
	priceBlock: {
		borderRight: '1px solid white',
		paddingRight: '10px',
		display: 'flex',
		alignItems: 'center',
	},
	actionBlock: {
		'& a': {
			textDecoration: 'none',
			color: 'white',
			fontSize: '20px',
		},
		paddingLeft: '10px',
	},
}));
