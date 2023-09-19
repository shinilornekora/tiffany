import { makeStyles } from "../../style";

export const useGlobalStyles = makeStyles()(() => ({
    'html, body': {
        padding: 0,
        margin: 0,
        boxSizing: 'border-box',
    },
}));