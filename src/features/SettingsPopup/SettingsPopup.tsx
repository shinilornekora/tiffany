import React from 'react';
import { useStyles } from './styles';
import { useGlobalStyles } from '../../shared/styles/globalStyles';
import { useTranslation } from '../../shared/hooks/useTranslation';

import cn from 'classnames';

export const SettingsPopup = () => {
	const { classes } = useStyles();
	const { classes: globalClasses } = useGlobalStyles();

	const t = useTranslation();

	return (
		<div className={classes.popup}>
			<div className={classes.detailsContainer}>
				<div className={classes.username}>Username</div>
				<div className={classes.email}>example@mail.ru</div>
			</div>
			<div className={classes.buttons}>
				<a
					href='/profile'
					className={cn(globalClasses.button, classes.button)}
				>
					{' '}
					{t('Edit profile data')}{' '}
				</a>
				<a href='/forum' className={globalClasses.button}>
					{' '}
					{t('Go to forum page')}{' '}
				</a>
				<a href='/' className={globalClasses.button}>
					{' '}
					{t('Check my plugins')}{' '}
				</a>
			</div>
		</div>
	);
};
