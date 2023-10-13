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
        color: '#1E1E1E',
        cursor: 'pointer',
    },
    greetings__slider: {
        fontSize: '5vw',
        fontWeight: 'bold',
        marginBlockEnd: 0,
    },
    greetings__description: {
        fontSize: '2vw',
    },
    content__wrapper: {
        position: 'absolute',
        width: "77%",
        height: '100vh',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        position: 'fixed',
        zIndex: '1000',
        background: '#FFFFFA',
        height: '5vw',
        top: '0',
        width: '100%',
        left: '0',
        right: '0',
    },
    header__wrapper: {
        display: 'flex',
        height: '100%',
        justifyContent: 'space-between',
        padding: '0 15px',
        alignItems: 'center',
        position: 'relative',
    },
    header__inner: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '1vw'
    },
    header__logo: {
        width: '3vw',
        height: '3vw'
    },
    header__icon: {
        width: '1.8vw',
        height: '1.8vw'
    },
    header__left: {
        textDecoration: 'none',
        color: 'black',
        fontSize: '2vw'
    },
    header__right: {

    },
    input__default: {
        width: "25vw",
        height: "4vw",
        textDecoration: "none !important",
        outline: "none !important",
        border: "none !important",
        WebkitTextFillColor: "inherit !important",
        WebkitBoxShadow: "0 0 0px 1000px inherit inset",
        transition: "background-color 5000s ease-in-out 0s",
        fontSize: "1.6vw",
        color: "inherit",
        backgroundColor: "transparent !important",
        "&::-webkit-input-placeholder": {
            color: "#000",
        },
        "&:-moz-placeholder": {
            /* FF 4-18 */
            color: "#000",
            opacity: 1,
        },
        "&::-moz-placeholder": {
            /* FF 19+ */
            color: "#000",
            opacity: 1,
        },
        "&:-ms-input-placeholder": {
            /* IE 10+ */
            color: "#000",
        },
        "&::-ms-input-placeholder": {
            /* Microsoft Edge */
            color: "#000",
        },
        "&::placeholder": {
            /* modern browser */
            color: "#000",
        },
        position: "relative",
        "&::after": {
            content: '""',
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "100%",
            height: 0,
            backgroundColor: "#fff",
            transition: "height 0.3s ease-in-out",
        },
        "&:focus::after": {
            height: "2px",
        },
    },
    input__wrapper: {
        margin: '4vh',
        backgroundColor: 'rgb(255, 255, 255, 0.3)',
    },
    activeInput: {
        borderBottom: "1px solid #000 !important",
    },
}));
