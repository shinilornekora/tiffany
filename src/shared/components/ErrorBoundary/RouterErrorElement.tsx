import React from 'react';
import { useStyles } from './styles';
import useTranslation from '../../utils/useTranslation';

export const RouterErrorElement = () => {
	const { classes } = useStyles();
	const t = useTranslation();

	return (
		<div className={ classes.mainWrapper }>
			<div className={ classes.errorCode }>404</div>
			<div className={ classes.errorDescription }>{ t('Oops! Seems like the page you asked does not exist.') }</div>
			<div className={ classes.errorDescription }>{ t('Check your URL once again :)') }</div>
		</div>
	);
};
