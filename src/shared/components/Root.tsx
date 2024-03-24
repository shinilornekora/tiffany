import { useStyles } from '../styles/commonStyles';
import React from 'react';
import { Outlet } from 'react-router';
import { AuthProvider } from '../hooks/useAuth';

export const Root = () => {
	const { classes } = useStyles();

	return (
		<AuthProvider>
			<div className={classes.content}>
				<Outlet />
			</div>
		</AuthProvider>
	);
};