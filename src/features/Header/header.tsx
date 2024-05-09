import React, { useCallback, useState } from 'react';

import { SettingsPopup } from '../SettingsPopup';

import { useTranslation } from '../../shared/hooks/useTranslation';
import { useGlobalStyles } from '../../shared/styles/globalStyles';
import { useStyles } from '../../shared/styles/commonStyles';

import language from '@shared/static/header/language.svg';
import cart from '@shared/static/header/cart.svg';
import userSettings from '@shared/static/header/settings.svg';
import logo from '@shared/static/header/logo.png';

import cn from 'classnames';

export const Header = () => {
	const t = useTranslation();

	const { classes, cx } = useStyles();
	const { classes: globalClasses } = useGlobalStyles();

	const [isSetVisible, showSettings] = useState<boolean>(false);
	const handlePopup = useCallback(() => showSettings(!isSetVisible), [showSettings, isSetVisible]);

	return (
		<section className={classes.header}>
			{isSetVisible && <SettingsPopup />}
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
