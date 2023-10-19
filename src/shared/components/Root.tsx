import { useStyles } from '../styles/commonStyles';
import React from 'react';
import { Outlet } from 'react-router';

export const Root = () => {
	const {classes} = useStyles();

	return (
		<div className={classes.content}>
			<Outlet/>
		</div>
	);
};
