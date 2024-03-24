import React from 'react';
import Header from '../../components/header';
import ContentBlock from '../../components/contentBlock';
import { useStyles } from '../../styles/commonStyles';

export const GreetingsPage = () => {
	const { classes } = useStyles();

	return (
		<div className={classes.content}>
			<Header />
			<ContentBlock />
		</div>
	);
};
