import { makeStyles } from '../../../style';

export const useStyles = makeStyles()(() => ({
	cartWrapper: {
		marginTop: '50px',
		padding: '10px',
		boxSizing: 'border-box',
		height: 'calc(100vh - 50px)',
		color: '#fff'
	},
	cartMainFlex: {
		display: 'flex',
		width: '100%',
		height: '100%',
		gap: '10px',
		'@media (max-width: 768px)': {
			flexDirection: 'column'
		}
	},
	cartImage: {
		border: '1px solid #fff',
		borderRadius: '6px',
		flex: '0 50%'
	},
	cartContent: {
		display: 'flex',
		flexDirection: 'column',
		gap: '10px',
		flex: '0 50%'
	},
	cartInfo: {
		border: '1px solid #fff',
		borderRadius: '6px',
		flex: '0 80%',
		padding: '30px',

	},
	cartTitle: {
		fontSize: '36px',
		fontWeight: '600',
		marginBottom: '20px'
	},
	cartDescription: {
		lineHeight: '22.34px'
	},
	cartPrice: {
		border: '1px solid #fff',
		borderRadius: '6px',
		flex: '0 20%',
		display: 'flex',
		fontSize: '20px'
	},
	cartPriceValue: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flex: '0 20%',
		borderRight: '1px solid #fff'
	},
	cartAddBtn: {
		background: 'none',
		border: 'none',
		padding: 0,
		cursor: 'pointer',
		flex: '0 20%',
		span: {
			color: '#fff',
			fontSize: '20px'
		},
		borderRight: '1px solid #fff'
	},
	cartViewBranchBtn: {
		background: 'none',
		border: 'none',
		padding: 0,
		cursor: 'pointer',
		flex: '0 20%',
		span: {
			color: '#fff',
			fontSize: '20px'
		},
		borderRight: '1px solid #fff'
	},
}));
