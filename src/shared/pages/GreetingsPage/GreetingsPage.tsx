import React from 'react';
import Header from '../../components/header';
import ContentBlock from '../../components/contentBlock';
import { Outlet } from 'react-router';
import { useStyles } from '../../styles/commonStyles';

const GreetingsPage = () => {
    const {classes} = useStyles();

    return (
        <div className={classes.content}>
            <Header/>
            <ContentBlock/>
        </div>
    );
};

export default GreetingsPage;
