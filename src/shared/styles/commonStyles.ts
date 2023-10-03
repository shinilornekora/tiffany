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
        fontSize: '64px',
        fontWeight: 'bold',
        marginBlockEnd: 0,
    },
    greetings__description: {
        fontSize: '26px',
    },
    content__wrapper: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
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

    },
    input__default: {
        width: "480px",
        height: "56px",
        textDecoration: "none !important",
        outline: "none !important",
        border: "none !important",
        WebkitTextFillColor: "inherit !important",
        WebkitBoxShadow: "0 0 0px 1000px #2E2D2D inset",
        transition: "background-color 5000s ease-in-out 0s",
        fontSize: '26px',
        color: "#fff",
        "&::-webkit-input-placeholder": {
            color: "red",
        },
        "&:-moz-placeholder": {
            /* FF 4-18 */
            color: "#fff",
            opacity: 1,
        },
        "&::-moz-placeholder": {
            /* FF 19+ */
            color: "#fff",
            opacity: 1,
        },
        "&:-ms-input-placeholder": {
            /* IE 10+ */
            color: "#fff",
        },
        "&::-ms-input-placeholder": {
            /* Microsoft Edge */
            color: "#fff",
        },
        "&::placeholder": {
            /* modern browser */
            color: "#fff",
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
      margin: '20px',
    },
    activeInput: {
        borderBottom: "1px solid #fff !important",
    },
}));
