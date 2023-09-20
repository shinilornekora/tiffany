import React from 'react';
import { useStyles } from '../styles/commonStyles';

const ContentBlock = () => {
    const { classes } = useStyles();

    return (
        <div className={classes.content__wrapper}>
            <div className={classes.content__textblock}>
                <p className={classes.greetings__slider}>Welcome to TeamEntropy</p>
                <p className={classes.greetings__description}>An endless world of possibilities in soundscape design</p>
            </div>
        </div>
    );
};

export default ContentBlock;
