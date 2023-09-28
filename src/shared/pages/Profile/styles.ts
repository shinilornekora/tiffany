import { makeStyles } from '../../../style';

export const useStyles = makeStyles()(() => ({
    profileContent: {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    profileContentWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        '& img.avatar': {
            width: '293px',
            height: '293px',
            margin: '0 60px',
        },
    },
    profileContentInfo: {
        display: 'flex',
        flexDirection: 'column',
        gap: '70px',
        borderLeft: '1px solid white',
        paddingLeft: '15px',
    },
    profileContentInfoBlock: {
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        gap: '15px',
    },
    profileContentInfoBlockName: {
        fontWeight: 'bold',
        fontSize: '36px',
    },
    profileContentInfoBlockEmail: {
        fontSize: '24px',
    },
    profileContentInfoBlockCreditCard: {
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
        fontSize: '24px',
        '& img': {
            width: '50px',
            height: '43px',
        }
    },
}));
