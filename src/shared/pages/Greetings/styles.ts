import { makeStyles } from '../../../style';

export const useStyles = makeStyles()(() => ({
    flex__wrapper: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
    startInputWrapper: {
        height: '100px',
        opacity: 0,
    },
}));
