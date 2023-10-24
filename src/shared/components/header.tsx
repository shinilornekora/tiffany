import React from 'react';
import { useStyles } from '../styles/commonStyles';

import logo from '../static/header/logo.png';
import globe from '../static/header/globe.png';
import forum from '../static/header/users-alt.png';
import cart from '../static/header/shopping-cart.png';
import profile from '../static/header/user.png';
import useTranslation from '../utils/useTranslation';
const Header = () => {
	const { classes, cx } = useStyles();
	const t = useTranslation();

	return (
		<section className={classes.header}>
			<div className={classes.header__wrapper}>
				<a href="/branches" className={cx(classes.header__inner, classes.header__left )}>
					<img className={classes.header__logo} src={logo} alt="logo"/>
					<p>{ t('TeamEntropy') }</p>
				</a>
				<div className={cx(classes.header__inner, classes.header__right)}>
					<a href="/profile" className={classes.header__icon}>
						<img src={profile} alt="profile"/>
					</a>
					<a href="/cart" className={classes.header__icon}>
						<img src={cart} alt="cart"/>
					</a>
					<a href="/forum" className={classes.header__icon}>
						<img src={forum} alt="forum"/>
					</a>
					<a href="/language" className={classes.header__icon}>
						<img src={globe} alt="language"/>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Header;
