import React from 'react';
import { useStyles } from './styles';

export const RouterErrorElement = (check: any) => {
    console.log(check);
    const { classes } = useStyles()
    return (
        <div className={classes.mainWrapper}>
            <div className={classes.errorCode}>404</div>
            <div className={classes.errorDescription}>Oops! Seems like the page you asked doesn't exist.</div>
            <div className={classes.errorDescription}>Check your URL once again :)</div>
        </div>
    );
};
