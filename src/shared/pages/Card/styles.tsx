import { makeStyles } from '../../../style';

export const useStyles = makeStyles()(() => ({
	card__flexWrapper: {
		display: 'flex',
		gap: '15px',
		justifyContent: 'center',
	},
	card__img: {
		border: '1px solid #fff',
		borderRadius: '5px',
		padding: '12px',
		flex: '0 1 34%',
		textAlign: 'right',
		img: {
			maxWidth: '100%',
		},
	},
	card__content: {
		flex: '0 1 40%',
		color: '#FFFFFF',
		display: 'flex',
		flexDirection: 'column',
		gap: '15px',
	},
	card__description: {
		border: '1px solid #fff',
		borderRadius: '5px',
		padding: '20px 30px',
		flex: '1 1 auto',
	},
	card__descriptionTitle: {
		fontSize: '48px',
		fontWeight: '700',
		lineHeight: '48px',
		marginBottom: '30px',
	},
	card__descriptionText: {
		fontSize: '28px',
		fontWeight: '700',
		lineHeight: '36px',
	},
	card__priceItem: {
		display: 'flex',
		a: {
			borderLeft: '1px solid #fff',
		},
		span: {
			paddingLeft: '0',
		},
		border: '1px solid #fff',
		borderRadius: '5px',
		padding: '40px 20px',
	},
	card__priceItemElement: {
		fontSize: '32px',
		fontWeight: '300',
		padding: '0 15px',
	},
}));
