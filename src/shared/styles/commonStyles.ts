import { makeStyles } from "../../style";

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
        color: '#fff',
    },
    greetings__slider: {
        fontSize: '36px',
        fontWeight: 'bold'
    },
    greetings__description: {
        fontSize: '14px',
    },
    content__wrapper: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        position: 'static',
        background: '#FFFFFA',
        height: '75px',
        borderBottom: 'black solid 1px'
    },
    header__wrapper: {
        display: 'flex',
        height: '100%',
        justifyContent: 'space-between',
        padding: '0 15px',
        alignItems: 'center',
    },
    header__inner: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '50px',
        gap: '15px'
    },
    header__left: {

    },
    header__right: {

    }
}));
