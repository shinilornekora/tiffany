import React, { useCallback, useState } from 'react';

import { SettingsPopup } from '../SettingsPopup';

import { useTranslation } from '@shared/hooks/useTranslation';
import { useGlobalStyles } from '@shared/styles/globalStyles';
import { useStyles } from '@shared/styles/commonStyles';

/* Хочется их нормально получать из бека. */
import language from '@shared/static/header/language.svg';
import cart from '@shared/static/header/cart.svg';
import userSettings from '@shared/static/header/settings.svg';
import logo from '@shared/static/header/logo.png';

import cn from 'classnames';

export const Header = () => {
	const t = useTranslation();

	const [isSetVisible, showSettings] = useState<boolean>(false);

	const { classes, cx } = useStyles();
	const { classes: globalClasses } = useGlobalStyles();

	const handlePopup = useCallback(() => showSettings(!isSetVisible), [showSettings, isSetVisible]);
	const setLanguage = useCallback(() => {
		Tiffany.toggleLanguage();
		window.location.reload();
	}, [Tiffany])

	return (
		<section className={classes.header}>
			<div className={isSetVisible ? classes.activeSet : classes.settings}>
				<SettingsPopup />
			</div>
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
					<a className={classes.header__icon} onClick={setLanguage}>
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
