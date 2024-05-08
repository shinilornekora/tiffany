import React, { useCallback, useState } from 'react';
import { useStyles } from '../../shared/styles/commonStyles';
import cn from 'classnames';

import logo from '../static/header/logo.png';
import language from '../static/header/language.svg';
import cart from '../static/header/cart.svg';
import userSettings from '../static/header/settings.svg';
import useTranslation from '../../translations/useTranslation';
import { SettingsPopup } from '../SettingsPopup';
import { useGlobalStyles } from '../../shared/styles/globalStyles';

export const Header = () => {
	const { classes, cx } = useStyles();
	const { classes: globalClasses } = useGlobalStyles();
	const t = useTranslation();
	const [settingsVisible, setSettingsVisible] = useState<boolean>(false);
	const handlePopup = useCallback(
		() => setSettingsVisible(!settingsVisible),
		[setSettingsVisible, settingsVisible],
	);

	return (
		<section className={classes.header}>
			{settingsVisible && <SettingsPopup />}
			<div
				className={cn(classes.header__wrapper, globalClasses.container)}
			>
				<a
					href='/branches'
					className={cx(classes.header__inner, classes.header__left)}
				>
					<img
						className={classes.header__logo}
						src={logo}
						alt='logo'
					/>
					<p>{t('TeamEntropy')}</p>
				</a>
				<div
					className={cx(classes.header__inner, classes.header__right)}
				>
					<a href='/language' className={classes.header__icon}>
						<img src={language} alt='language' />
					</a>
					<a href='/cart' className={classes.header__icon}>
						<img src={cart} alt='cart' />
					</a>
					<div onClick={handlePopup} className={classes.header__icon}>
						<img src={userSettings} alt='profile' />
					</div>
				</div>
			</div>
		</section>
	);
};
