import { makeStyles } from '../../style';

export const useStyles = makeStyles()(() => ({
	content: {
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
	},
	content__textblock: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		color: '#1E1E1E',
		cursor: 'pointer',
	},
	greetings__slider: {
		fontSize: '72px',
		fontWeight: 'bold',
		marginBlockEnd: 0,
	},
	greetings__description: {
		fontSize: '28px',
	},
	content__wrapper: {
		position: 'absolute',
		top: '60%',
		left: '50%',
		transform: 'translate(-50%, -40%)',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	header: {
		position: 'fixed',
		zIndex: '1000',
		background: '#FFFFFA',
		height: '50px',
		top: '0',
		width: '100%',
		left: '0',
		right: '0',
	},
	header__wrapper: {
		display: 'flex',
		height: '100%',
		justifyContent: 'space-between',
		alignItems: 'center',
		position: 'relative',
	},
	header__inner: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: '10px',
		height: '100%',
	},
	header__logo: {
		width: '90%',
		height: '90%',
	},
	header__icon: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		cursor: 'pointer',
	},
	header__left: {
		textDecoration: 'none',
		color: 'black',
		fontSize: '20px',
	},
	header__right: {
		height: '100%',
	},
	input__default: {
		width: '300px',
		height: '50px',
		textDecoration: 'none !important',
		outline: 'none !important',
		border: 'none !important',
		WebkitTextFillColor: 'inherit !important',
		WebkitBoxShadow: '0 0 0px 1000px inherit inset',
		transition: 'background-color 5000s ease-in-out 0s',
		fontSize: '20px',
		color: 'inherit',
		backgroundColor: 'transparent !important',
		'&::-webkit-input-placeholder': {
			color: '#000',
		},
		'&:-moz-placeholder': {
			/* FF 4-18 */
			color: '#000',
			opacity: 1,
		},
		'&::-moz-placeholder': {
			/* FF 19+ */
			color: '#000',
			opacity: 1,
		},
		'&:-ms-input-placeholder': {
			/* IE 10+ */
			color: '#000',
		},
		'&::-ms-input-placeholder': {
			/* Microsoft Edge */
			color: '#000',
		},
		'&::placeholder': {
			/* modern browser */
			color: '#000',
		},
		position: 'relative',
		'&::after': {
			content: '""',
			position: 'absolute',
			left: 0,
			bottom: 0,
			width: '100%',
			height: 0,
			backgroundColor: '#fff',
			transition: 'height 0.3s ease-in-out',
		},
		'&:focus::after': {
			height: '2px',
		},
	},
	input__wrapper: {
		backgroundColor: 'rgb(255, 255, 255, 0.3)',
	},
	activeInput: {
		borderBottom: '1px solid #000 !important',
	},
	greatings__formWrapper: {
		display: 'block',
		pointerEvents: 'none',
		opacity: 0,
	},
	greatings__changeForm: {
		marginTop: '40px',
		textAlign: 'center',
		span: {
			cursor: 'pointer',
		},
	},
}));
