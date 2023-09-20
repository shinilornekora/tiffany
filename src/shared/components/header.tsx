import React from 'react';
import { useStyles } from '../styles/commonStyles';

import logo from '../static/header/logo.png'
import globe from '../static/header/globe.png'
import forum from '../static/header/users-alt.png'
import cart from '../static/header/shopping-cart.png'
import profile from '../static/header/user.png'
const Header = () => {
    const { classes, cx } = useStyles();

    return (
        <section className={classes.header}>
            <div className={classes.header__wrapper}>
                <div className={cx(classes.header__inner, classes.header__left )}>
                    <img src={logo} alt="logo"/>
                    <p>TeamEntropy</p>
                </div>
                <div className={cx(classes.header__inner, classes.header__right)}>
                    <img src={profile} alt="profile"/>
                    <img src={cart} alt="cart"/>
                    <img src={forum} alt="forum"/>
                    <img src={globe} alt="language"/>
                </div>
            </div>
        </section>
    );
};

export default Header;
