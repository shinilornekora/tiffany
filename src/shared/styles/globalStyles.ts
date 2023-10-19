import { makeStyles } from '../../style';

export const useGlobalStyles = makeStyles()(() => ({
	'*': {
		boxSizing: 'border-box',
		padding: 0,
		margin: 0,
	}
}));
