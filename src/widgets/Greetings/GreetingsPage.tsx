import React, { useCallback } from 'react';
import { Header } from '../../modules/Header/header';
import { ContentBlock } from '../../modules/GreetBlock/contentBlock';

import { useStyles } from '../../shared/styles/commonStyles';
import { useAuth } from '../../shared/hooks/useAuth';

export const GreetingsPage = () => {
	const { classes } = useStyles();
	const { login, logout } = useAuth();

	Tiffany._loginDevFunc = useCallback(
		() => Tiffany.globalDevCall(login, { user: 'user' }),
		[],
	);
	Tiffany._logoutDevFunc = useCallback(
		() => Tiffany.globalDevCall(logout),
		[],
	);

	return (
		<div className={classes.content}>
			<Header />
			<ContentBlock />
		</div>
	);
};
