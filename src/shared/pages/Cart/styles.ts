import { makeStyles } from '../../../style';

export const useStyles = makeStyles()(() => ({
	cards: {
		display: 'flex',
		flexDirection: 'column',
		gap: '15px',
	},
	cardWrapper: {
		borderRadius: '6px',
		border: '1px solid #FFF',
		display: 'flex',
		flexDirection: 'row',
		color: 'white',
		padding: '10px 0',
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
	cart__totalPrice: {
		position: 'absolute',
		right: '15px',
		bottom: '15px',
		padding: '10px',
		backgroundColor: '#fff',
		border: '2px solid #000',
		borderRadius: '5px',
		fontSize: '20px',
		lineHeight: '28px'
	},
	cart__price: {},
	cart__goToPay: {}
}));
