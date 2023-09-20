import { useStyles } from '../styles/commonStyles';
import Header from './header';
import ContentBlock from './contentBlock';
import React from 'react';

export const Root = () => {
    const {classes} = useStyles();

    return (
        <div className={classes.content}>
            <Header/>
            <ContentBlock/>
        </div>
    );
};
