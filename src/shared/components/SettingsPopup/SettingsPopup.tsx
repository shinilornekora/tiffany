import React from 'react';
import { useStyles } from './styles';
import useTranslation from '../../../translations/useTranslation';

export const SettingsPopup = () => {
	const { classes } = useStyles();
	const t = useTranslation();

	return (
		<div className={ classes.popup }>
			<div className={ classes.detailsContainer }>
				<div className={ classes.username }>Username</div>
				<div className={ classes.email }>example@mail.ru</div>
			</div>
			<div className={ classes.buttons }>
				<a href="/profile" className={ classes.button }> { t('Edit profile data') } </a>
				<a href="/forum" className={ classes.button }> { t('Go to forum page') } </a>
				<a href="/" className={ classes.button }> { t('Check my plugins') } </a>
			</div>
		</div>
	);
};
