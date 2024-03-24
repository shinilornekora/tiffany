import React, { useCallback } from 'react';
import Header from '../../components/header';
import ContentBlock from '../../components/contentBlock';

import { useStyles } from '../../styles/commonStyles';
import { useAuth } from '../../hooks/useAuth';

export const GreetingsPage = () => {
	const { classes } = useStyles();
	const { login, logout } = useAuth();

	Tiffany.loginDevFunc = useCallback(() => Tiffany.globalDevCall(login, { user: 'user' }), []);
	Tiffany.logoutDevFunc = useCallback(() => Tiffany.globalDevCall(logout), []);

	return (
		<div className={classes.content}>
			<Header />
			<ContentBlock />
		</div>
	);
};
