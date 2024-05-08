import { makeStyles } from '../../style';

export const useStyles = makeStyles()(() => ({
	greatings__formWrapper: {
		display: 'block',
		pointerEvents: 'none',
		opacity: 1,
	},
    startInputWrapper: {
		display: 'flex',
		flexDirection: 'column',
		gap: '15px',
		alignItems: 'center',
	},
    input__wrapper: {
		backgroundColor: 'rgb(255, 255, 255, 0.3)',
		borderRadius: '20px',
	},
    input__default: {
		width: '300px',
		height: '50px',
		textDecoration: 'none !important',
		outline: 'none !important',
		border: 'none !important',
		borderRadius: '20px',
		padding: '5px 20px',
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
    activeInput: {
		borderBottom: '1px solid #000 !important',
	},
    button: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: '20px',
		color: '#fff',
		width: '200px',
		height: '50px',
		borderRadius: '15px',
		textDecoration: 'none',
		backgroundColor: '#2E2D2D',
		cursor: 'pointer',
	},
    greatings__changeForm: {
		marginTop: '40px',
		textAlign: 'center',
		fontSize: '18px',
		color: '#FFFFFF',
		textShadow: '-1px -1px 2px #000, 1px -1px 2px #000,	-1px 1px 2px #000, 1px 1px 2px #000',
		span: {
			cursor: 'pointer',
			padding: '10px',
		},
	},
}));
